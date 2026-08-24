const express = require("express");

const router = express.Router();

const {
    authenticateToken,
} = require("../middleware/authMiddleware");

const validateRequest = require("../middleware/validationMiddleware");

const {
    createPaymentValidation,
    verifyPaymentValidation,
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

module.exports = router;