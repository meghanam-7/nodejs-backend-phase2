const applicationRepository = require("../persistence/applicationRepository");

const applyToJob = async (studentId, jobId) => {
  const job = await applicationRepository.findJobById(jobId);

  if (!job) {
    throw new Error("Job not found");
  }

  if (job.status !== "PUBLISHED") {
    throw new Error("Applications are only allowed for published jobs");
  }

  const existingApplication =
    await applicationRepository.findApplication(
      jobId,
      studentId
    );

  if (existingApplication) {
    throw new Error("You have already applied to this job");
  }

  return applicationRepository.createApplication(
    jobId,
    studentId
  );
};

const getMyApplications = async (studentId) => {
  return applicationRepository.findStudentApplications(
    studentId
  );
};

const getJobApplications = async (companyUserId, jobId) => {
  const company =
    await applicationRepository.findCompanyByOwner(
      companyUserId
    );

  if (!company) {
    throw new Error("Company profile not found for this user");
  }

  const job = await applicationRepository.findJobById(jobId);

  if (!job) {
    throw new Error("Job not found");
  }

  if (job.companyId !== company.id) {
    throw new Error(
      "You are not authorized to view applications for this job"
    );
  }

  return applicationRepository.findCompanyApplications(
    company.id,
    jobId
  );
};

const shortlistApplication = async (
  companyUserId,
  applicationId
) => {
  const company =
    await applicationRepository.findCompanyByOwner(
      companyUserId
    );

  if (!company) {
    throw new Error("Company profile not found for this user");
  }

  const application =
    await applicationRepository.findJobApplication(
      applicationId
    );

  if (!application) {
    throw new Error("Application not found");
  }

  if (application.job.companyId !== company.id) {
    throw new Error(
      "You are not authorized to shortlist this application"
    );
  }

  if (application.status === "SHORTLISTED") {
    throw new Error("Application is already shortlisted");
  }

  return applicationRepository.shortlistApplication(
    applicationId
  );
};

module.exports = {
  applyToJob,
  getMyApplications,
  getJobApplications,
  shortlistApplication,
};