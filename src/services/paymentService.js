const Razorpay = require("razorpay");
const paymentRepository = require("../persistence/paymentRepository");

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createPaymentOrder = async (userId, amount) => {
    const receipt = `receipt_${userId}_${Date.now()}`;

    const razorpayOrder = await razorpay.orders.create({
        amount,
        currency: "INR",
        receipt,
    });

    const payment = await paymentRepository.createPayment({
        userId,
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

module.exports = {
    createPaymentOrder,
};