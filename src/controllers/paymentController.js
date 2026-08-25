const paymentService = require("../services/paymentService");

const createPaymentOrder = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { jobId, amount } = req.body;

        const result = await paymentService.createPaymentOrder(
            userId,
            jobId,
            amount
        );

        return res.status(201).json({
            success: true,
            message: "Payment order created successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const verifyPayment = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const {
            razorpayOrderId,
            razorpayPaymentId,
        } = req.body;

        const payment = await paymentService.verifyPayment(
            userId,
            razorpayOrderId,
            razorpayPaymentId
        );

        return res.status(200).json({
            success: true,
            message: "Payment verified successfully",
            data: payment,
        });
    } catch (error) {
        next(error);
    }
};

const getPaymentReceipt = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const paymentId = Number(req.params.paymentId);

        const receipt =
            await paymentService.getPaymentReceipt(
                userId,
                paymentId
            );

        return res.status(200).json({
            success: true,
            message: "Payment receipt retrieved successfully",
            data: receipt,
        });
    } catch (error) {
        next(error);
    }
};

const createRefund = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const paymentId = Number(req.params.paymentId);
        const { amount, reason } = req.body;

        const result = await paymentService.createRefund(
            userId,
            paymentId,
            amount,
            reason
        );

        return res.status(201).json({
            success: true,
            message: "Refund created successfully",
            data: result,
        });
        } catch (error) {
        console.error("REFUND ERROR:", error);

        return res.status(error.statusCode || 500).json({
            success: false,
            message:
                error?.error?.description ||
                error?.message ||
                "Refund failed",
            code: error?.error?.code || null,
        });
    }
};

const reconcilePayment = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const paymentId = Number(req.params.paymentId);

        const result =
            await paymentService.reconcilePayment(
                userId,
                paymentId
            );

        return res.status(200).json({
            success: true,
            message: "Payment reconciliation completed successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createPaymentOrder,
    verifyPayment,
    getPaymentReceipt,
    createRefund,
    reconcilePayment,
};