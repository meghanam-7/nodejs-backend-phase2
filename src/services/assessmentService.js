const crypto = require("crypto");

const generateAssessmentToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

module.exports = {
  generateAssessmentToken,
};