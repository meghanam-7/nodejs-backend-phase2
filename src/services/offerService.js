const offerRepository = require("../persistence/offerRepository");

const generateOffer = async (
  companyUserId,
  applicationId,
  compensation,
  currency = "INR",
  joiningDate = null
) => {
  // 1. Find the application with student and job details
  const application =
    await offerRepository.findApplicationById(
      applicationId
    );

  if (!application) {
    throw new Error("Application not found");
  }

  // 2. Verify that the authenticated company owns the job
  const company =
    await offerRepository.findCompanyByOwner(
      companyUserId
    );

  if (!company) {
    throw new Error(
      "Company profile not found for this user"
    );
  }

  if (application.job.companyId !== company.id) {
    throw new Error(
      "You are not authorized to generate an offer for this application"
    );
  }

  // 3. Only shortlisted candidates can receive offers
  if (application.status !== "SHORTLISTED") {
    throw new Error(
      "An offer can only be generated for a shortlisted candidate"
    );
  }

  // 4. Prevent duplicate offer generation
  const existingOffer =
    await offerRepository.findOfferByApplicationId(
      applicationId
    );

  if (existingOffer) {
    throw new Error(
      "An offer has already been generated for this application"
    );
  }

  // 5. Validate compensation
  if (
    compensation === undefined ||
    compensation === null ||
    Number(compensation) <= 0
  ) {
    throw new Error(
      "Compensation must be greater than zero"
    );
  }

  // 6. Create the offer
  return offerRepository.createOffer({
    applicationId,
    studentId: application.student.id,
    jobId: application.job.id,
    compensation: Number(compensation),
    currency,
    joiningDate: joiningDate
      ? new Date(joiningDate)
      : null,
    status: "DRAFT",
    documentUrl: null,
    eSignProvider: null,
    eSignStatus: "NOT_STARTED",
    eSignRequestId: null,
  });
};

const getOfferById = async (userId, offerId) => {
  const offer =
    await offerRepository.findOfferById(offerId);

  if (!offer) {
    throw new Error("Offer not found");
  }

  const isStudent =
    offer.studentId === userId;

  const isCompanyOwner =
    offer.application?.job?.companyId ===
    (
      await offerRepository.findCompanyByOwner(
        userId
      )
    )?.id;

  if (!isStudent && !isCompanyOwner) {
    throw new Error(
      "You are not authorized to view this offer"
    );
  }

  return offer;
};

const getStudentOffers = async (studentId) => {
  return offerRepository.findOffersByStudentId(
    studentId
  );
};

const getJobOffers = async (
  companyUserId,
  jobId
) => {
  const company =
    await offerRepository.findCompanyByOwner(
      companyUserId
    );

  if (!company) {
    throw new Error(
      "Company profile not found for this user"
    );
  }

  const job =
    await offerRepository.findJobById(jobId);

  if (!job) {
    throw new Error("Job not found");
  }

  if (job.companyId !== company.id) {
    throw new Error(
      "You are not authorized to view offers for this job"
    );
  }

  return offerRepository.findOffersByJobId(jobId);
};



module.exports = {
  generateOffer,
  getOfferById,
  getStudentOffers,
  getJobOffers,
};