const prisma = require("../config/prismaClient");

const findJobById = async (jobId) => {
    return prisma.job.findUnique({
        where: {
            id: jobId,
        },
        select: {
            id: true,
            title: true,
            status: true,
            companyId: true,
        },
    });
};

const createPayment = async (data) => {
    return prisma.payment.create({
        data: {
            userId: data.userId,
            jobId: data.jobId,
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

const markPaymentCaptured = async (
    razorpayOrderId,
    razorpayPaymentId
) => {
    return prisma.payment.update({
        where: {
            razorpayOrderId,
        },
        data: {
            status: "CAPTURED",
            razorpayPaymentId,
        },
    });
};

const findCapturedPaymentForJob = async (userId, jobId) => {
    return prisma.payment.findFirst({
        where: {
            userId,
            jobId,
            status: "CAPTURED",
        },
    });
};

module.exports = {
    createPayment,
    findPaymentByRazorpayOrderId,
    findJobById,
    markPaymentCaptured,
    findCapturedPaymentForJob,
};