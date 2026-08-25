const express = require("express");

const router = express.Router();

const {
    authenticateToken,
} = require("../middleware/authMiddleware");

const validateRequest = require("../middleware/validationMiddleware");

const {
    createPaymentValidation,
    verifyPaymentValidation,
    paymentIdValidation,
    refundValidation,
} = require("../validations/paymentValidation");

const paymentController = require("../controllers/paymentController");

router.post(
    "/payments/orders",
    authenticateToken,
    createPaymentValidation,
    validateRequest,
    paymentController.createPaymentOrder
);

router.post(
    "/payments/verify",
    authenticateToken,
    verifyPaymentValidation,
    validateRequest,
    paymentController.verifyPayment
);

router.get(
    "/payments/:paymentId/receipt",
    authenticateToken,
    paymentIdValidation,
    validateRequest,
    paymentController.getPaymentReceipt
);

router.post(
    "/payments/:paymentId/refund",
    authenticateToken,
    paymentIdValidation,
    refundValidation,
    validateRequest,
    paymentController.createRefund
);

router.post(
    "/payments/:paymentId/reconcile",
    authenticateToken,
    paymentIdValidation,
    validateRequest,
    paymentController.reconcilePayment
);

module.exports = router;