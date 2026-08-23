const { body } = require("express-validator");

const createPaymentValidation = [
    body("amount")
        .isInt({ min: 100 })
        .withMessage("Amount must be an integer of at least 100 paise"),
];

module.exports = {
    createPaymentValidation,
};