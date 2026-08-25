
const Razorpay = require("razorpay");
const paymentRepository = require("../persistence/paymentRepository");

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/*
 * Convert Razorpay refund errors into application-friendly errors.
 */
const handleRefundError = (error) => {
    const razorpayCode =
        error?.error?.code || error?.code || null;

    const description =
        error?.error?.description ||
        error?.description ||
        "Unknown Razorpay refund error";

    const normalizedDescription =
        description.toLowerCase();

    /*
     * Razorpay may return different descriptions for
     * balance/funding-related refund failures.
     */
    const isBalanceError =
        normalizedDescription.includes("insufficient balance") ||
        normalizedDescription.includes("insufficient funds") ||
        normalizedDescription.includes("low balance") ||
        normalizedDescription.includes("available balance") ||
        normalizedDescription.includes("balance");

    const applicationError = new Error(
        isBalanceError
            ? "Refund could not be processed because the Razorpay account does not have sufficient balance to process the refund."
            : `Razorpay rejected the refund request: ${description}`
    );

    applicationError.statusCode = 400;

    applicationError.code = isBalanceError
        ? "RAZORPAY_REFUND_INSUFFICIENT_BALANCE"
        : razorpayCode || "RAZORPAY_REFUND_ERROR";

    /*
     * Keep the original Razorpay error available for server-side
     * debugging without exposing it directly to the client.
     */
    applicationError.razorpayError = error;

    console.error("Razorpay refund failed:", {
        code: razorpayCode,
        description,
        isBalanceError,
    });

    return applicationError;
};

const createPaymentOrder = async (userId, jobId, amount) => {
    const job = await paymentRepository.findJobById(jobId);

    if (!job) {
        throw new Error("Job not found");
    }

    if (job.status !== "PUBLISHED") {
        throw new Error(
            "Payment is only allowed for published jobs"
        );
    }

    const receipt =
        `receipt_${userId}_${jobId}_${Date.now()}`;

    const razorpayOrder =
        await razorpay.orders.create({
            amount,
            currency: "INR",
            receipt,
        });

    const payment =
        await paymentRepository.createPayment({
            userId,
            jobId,
            amount,
            currency: "INR",
            status: "CREATED",
            razorpayOrderId: razorpayOrder.id,
            receipt,
        });

    return {
        payment,
        razorpayOrder,
    };
};

const verifyPayment = async (
    userId,
    razorpayOrderId,
    razorpayPaymentId
) => {
    const payment =
        await paymentRepository.findPaymentByRazorpayOrderId(
            razorpayOrderId
        );

    if (!payment) {
        throw new Error("Payment order not found");
    }

    if (payment.userId !== userId) {
        throw new Error(
            "You are not authorized to verify this payment"
        );
    }

    if (payment.status === "CAPTURED") {
        throw new Error(
            "Payment is already captured"
        );
    }

    const razorpayPayment =
        await razorpay.payments.fetch(
            razorpayPaymentId
        );

    if (
        razorpayPayment.order_id !==
        razorpayOrderId
    ) {
        throw new Error(
            "Payment does not belong to this order"
        );
    }

    if (
        razorpayPayment.status !== "captured"
    ) {
        throw new Error(
            "Payment has not been captured"
        );
    }

    return paymentRepository.markPaymentCaptured(
        razorpayOrderId,
        razorpayPaymentId
    );
};

const getPaymentReceipt = async (
    userId,
    paymentId
) => {
    const payment =
        await paymentRepository.findPaymentById(
            paymentId
        );

    if (!payment) {
        throw new Error("Payment not found");
    }

    if (payment.userId !== userId) {
        throw new Error(
            "You are not authorized to view this payment receipt"
        );
    }

    if (payment.status !== "CAPTURED") {
        throw new Error(
            "Receipt is available only for captured payments"
        );
    }

    return {
        paymentId: payment.id,
        receipt: payment.receipt,
        amount: payment.amount,
        currency: payment.currency,
        status: payment.status,
        razorpayOrderId:
            payment.razorpayOrderId,
        razorpayPaymentId:
            payment.razorpayPaymentId,
        createdAt: payment.createdAt,
    };
};

const createRefund = async (
    userId,
    paymentId,
    amount,
    reason
) => {
    const payment =
        await paymentRepository.findPaymentById(
            paymentId
        );

    if (!payment) {
        throw new Error("Payment not found");
    }

    if (payment.userId !== userId) {
        throw new Error(
            "You are not authorized to refund this payment"
        );
    }

    if (payment.status !== "CAPTURED") {
        throw new Error(
            "Only captured payments can be refunded"
        );
    }

    if (!payment.razorpayPaymentId) {
        throw new Error(
            "Razorpay payment ID not found"
        );
    }

    const refundAmount =
        amount || payment.amount;

    if (refundAmount <= 0) {
        throw new Error(
            "Refund amount must be greater than zero"
        );
    }

    if (refundAmount > payment.amount) {
        throw new Error(
            "Refund amount cannot exceed payment amount"
        );
    }

    let razorpayRefund;

    try {
        razorpayRefund =
            await razorpay.payments.refund(
                payment.razorpayPaymentId,
                {
                    amount: refundAmount,
                    notes: reason
                        ? {
                              reason,
                          }
                        : undefined,
                }
            );
    } catch (error) {
        /*
         * Important:
         * Do NOT create a local Refund record when
         * Razorpay itself rejected the refund.
         */
        throw handleRefundError(error);
    }

    const refund =
        await paymentRepository.createRefund({
            paymentId: payment.id,
            amount: refundAmount,
            currency: payment.currency,
            status: razorpayRefund.status
                ? razorpayRefund.status.toUpperCase()
                : "CREATED",
            razorpayRefundId:
                razorpayRefund.id,
            reason,
        });

    return {
        refund,
        razorpayRefund,
    };
};

const reconcilePayment = async (
    userId,
    paymentId
) => {
    const payment =
        await paymentRepository.findPaymentById(
            paymentId
        );

    if (!payment) {
        throw new Error("Payment not found");
    }

    if (payment.userId !== userId) {
        throw new Error(
            "You are not authorized to reconcile this payment"
        );
    }

    if (!payment.razorpayPaymentId) {
        throw new Error(
            "Razorpay payment ID not found. Payment must be captured before reconciliation"
        );
    }

    const razorpayPayment =
        await razorpay.payments.fetch(
            payment.razorpayPaymentId
        );

    const gatewayAmount =
        razorpayPayment.amount;

    const gatewayPaymentStatus =
        razorpayPayment.status;

    const amountMatches =
        payment.amount === gatewayAmount;

    const statusMatches =
        payment.status.toLowerCase() ===
        gatewayPaymentStatus.toLowerCase();

    const isReconciled =
        amountMatches && statusMatches;

    let mismatchReason = null;

    if (
        !amountMatches &&
        !statusMatches
    ) {
        mismatchReason =
            "Payment amount and payment status do not match";
    } else if (!amountMatches) {
        mismatchReason =
            "Payment amount does not match gateway amount";
    } else if (!statusMatches) {
        mismatchReason =
            "Payment status does not match gateway status";
    }

    const reconciliation =
        await paymentRepository.createReconciliation({
            paymentId: payment.id,
            status: isReconciled
                ? "RECONCILED"
                : "MISMATCH",
            localAmount: payment.amount,
            gatewayAmount,
            localPaymentStatus:
                payment.status,
            gatewayPaymentStatus,
            mismatchReason,
        });

    return {
        reconciliation,
        payment,
        razorpayPayment,
    };
};

module.exports = {
    createPaymentOrder,
    verifyPayment,
    getPaymentReceipt,
    createRefund,
    reconcilePayment,
};
