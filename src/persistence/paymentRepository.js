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

const findPaymentById = async (paymentId) => {
    return prisma.payment.findUnique({
        where: {
            id: paymentId,
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

const createRefund = async (data) => {
    return prisma.refund.create({
        data: {
            paymentId: data.paymentId,
            amount: data.amount,
            currency: data.currency,
            status: data.status,
            razorpayRefundId: data.razorpayRefundId,
            reason: data.reason,
        },
    });
};

const updateRefund = async (refundId, data) => {
    return prisma.refund.update({
        where: {
            id: refundId,
        },
        data,
    });
};

const findRefundByRazorpayRefundId = async (razorpayRefundId) => {
    return prisma.refund.findUnique({
        where: {
            razorpayRefundId,
        },
    });
};

const createReconciliation = async (data) => {
    return prisma.reconciliation.create({
        data: {
            paymentId: data.paymentId,
            status: data.status,
            localAmount: data.localAmount,
            gatewayAmount: data.gatewayAmount,
            localPaymentStatus: data.localPaymentStatus,
            gatewayPaymentStatus: data.gatewayPaymentStatus,
            mismatchReason: data.mismatchReason,
            reconciledAt: data.reconciledAt,
        },
    });
};

const findReconciliationsByPaymentId = async (paymentId) => {
    return prisma.reconciliation.findMany({
        where: {
            paymentId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};

module.exports = {
    createPayment,
    findPaymentByRazorpayOrderId,
    findPaymentById,
    findJobById,
    markPaymentCaptured,
    findCapturedPaymentForJob,
    createRefund,
    updateRefund,
    findRefundByRazorpayRefundId,
    createReconciliation,
    findReconciliationsByPaymentId,
};