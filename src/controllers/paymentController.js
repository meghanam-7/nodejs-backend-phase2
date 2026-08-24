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

module.exports = {
    createPaymentOrder,
    verifyPayment,
};