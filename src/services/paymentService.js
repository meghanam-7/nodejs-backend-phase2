const Razorpay = require("razorpay");
const paymentRepository = require("../persistence/paymentRepository");

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createPaymentOrder = async (userId, jobId, amount) => {
    const job = await paymentRepository.findJobById(jobId);

    if (!job) {
        throw new Error("Job not found");
    }

    if (job.status !== "PUBLISHED") {
        throw new Error("Payment is only allowed for published jobs");
    }

    const receipt = `receipt_${userId}_${jobId}_${Date.now()}`;

    const razorpayOrder = await razorpay.orders.create({
        amount,
        currency: "INR",
        receipt,
    });

    const payment = await paymentRepository.createPayment({
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
        throw new Error("Payment is already captured");
    }

    const razorpayPayment =
        await razorpay.payments.fetch(razorpayPaymentId);

    if (razorpayPayment.order_id !== razorpayOrderId) {
        throw new Error(
            "Payment does not belong to this order"
        );
    }

    if (razorpayPayment.status !== "captured") {
        throw new Error(
            "Payment has not been captured"
        );
    }

    return paymentRepository.markPaymentCaptured(
        razorpayOrderId,
        razorpayPaymentId
    );
};

module.exports = {
    createPaymentOrder,
    verifyPayment,
};