const express = require("express");

const router = express.Router();

const {
  authenticateToken,
} = require("../middleware/authMiddleware");

const {
  requireRole,
} = require("../middleware/authorizationMiddleware");

const validateRequest = require("../middleware/validationMiddleware");

const {
  createOfferValidation,
  offerIdValidation,
} = require("../validations/offerValidation");

const offerController = require("../controllers/offerController");

// Company generates an offer for a shortlisted application
router.post(
  "/offers",
  authenticateToken,
  requireRole("COMPANY"),
  createOfferValidation,
  validateRequest,
  offerController.generateOffer
);

// Student views their offers
router.get(
  "/offers",
  authenticateToken,
  requireRole("STUDENT"),
  offerController.getStudentOffers
);

// Get a specific offer
router.get(
  "/offers/:id",
  authenticateToken,
  offerIdValidation,
  validateRequest,
  offerController.getOfferById
);

// Company views offers generated for its job
router.get(
  "/jobs/:jobId/offers",
  authenticateToken,
  requireRole("COMPANY"),
  offerController.getJobOffers
);

module.exports = router;