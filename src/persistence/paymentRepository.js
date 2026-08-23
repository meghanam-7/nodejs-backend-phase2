const prisma = require("../config/prismaClient");

const createPayment = async (data) => {
    return prisma.payment.create({
        data: {
            userId: data.userId,
            amount: data.amount,
            currency: data.currency,
            status: data.status,
            razorpayOrderId: data.razorpayOrderId,
            receipt: data.receipt,
        },
    });
};

const findPaymentByRazorpayOrderId = async (razorpayOrderId) => {
    return prisma.payment.findUnique({
        where: {
            razorpayOrderId,
        },
    });
};

module.exports = {
    createPayment,
    findPaymentByRazorpayOrderId,
};