const { body } = require("express-validator");

const createPaymentValidation = [
    body("jobId")
        .isInt({ min: 1 })
        .withMessage("Job ID must be a positive integer"),

    body("amount")
        .isInt({ min: 100 })
        .withMessage("Amount must be an integer of at least 100 paise"),
];

const verifyPaymentValidation = [
    body("razorpayOrderId")
        .notEmpty()
        .withMessage("Razorpay order ID is required"),

    body("razorpayPaymentId")
        .notEmpty()
        .withMessage("Razorpay payment ID is required"),
];

module.exports = {
    createPaymentValidation,
    verifyPaymentValidation,
};