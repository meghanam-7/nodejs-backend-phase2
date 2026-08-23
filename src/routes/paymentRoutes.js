const express = require("express");

const router = express.Router();

const {
    authenticateToken,
} = require("../middleware/authMiddleware");

const validateRequest = require("../middleware/validationMiddleware");

const {
    createPaymentValidation,
} = require("../validations/paymentValidation");

const paymentController = require("../controllers/paymentController");

router.post(
    "/payments/orders",
    authenticateToken,
    createPaymentValidation,
    validateRequest,
    paymentController.createPaymentOrder
);

module.exports = router;
