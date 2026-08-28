const offerService = require("../services/offerService");

const generateOffer = async (req, res) => {
  try {
    const companyUserId = req.user.id;
    const applicationId = Number(req.body.applicationId);

    const {
      compensation,
      currency,
      joiningDate,
    } = req.body;

    const offer = await offerService.generateOffer(
      companyUserId,
      applicationId,
      compensation,
      currency,
      joiningDate
    );

    return res.status(201).json({
      success: true,
      message: "Offer generated successfully",
      data: offer,
    });
  } catch (error) {
    console.error("Generate offer error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getOfferById = async (req, res) => {
  try {
    const userId = req.user.id;
    const offerId = Number(req.params.id);

    const offer = await offerService.getOfferById(
      userId,
      offerId
    );

    return res.status(200).json({
      success: true,
      message: "Offer retrieved successfully",
      data: offer,
    });
  } catch (error) {
    console.error("Get offer error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getStudentOffers = async (req, res) => {
  try {
    const offers =
      await offerService.getStudentOffers(
        req.user.id
      );

    return res.status(200).json({
      success: true,
      message: "Student offers retrieved successfully",
      data: offers,
    });
  } catch (error) {
    console.error("Get student offers error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getJobOffers = async (req, res) => {
  try {
    const companyUserId = req.user.id;
    const jobId = Number(req.params.jobId);

    const offers =
      await offerService.getJobOffers(
        companyUserId,
        jobId
      );

    return res.status(200).json({
      success: true,
      message: "Job offers retrieved successfully",
      data: offers,
    });
  } catch (error) {
    console.error("Get job offers error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  generateOffer,
  getOfferById,
  getStudentOffers,
  getJobOffers,
};