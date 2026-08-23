const paymentService = require("../services/paymentService");

const createPaymentOrder = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { amount } = req.body;

        const result = await paymentService.createPaymentOrder(
            userId,
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

module.exports = {
    createPaymentOrder,
};