const express = require("express");
const router = express.Router();

const { authenticateToken } = require("../middleware/authMiddleware");
const { deleteOwnAccount } = require("../controllers/userController");

router.delete("/users/me", authenticateToken, deleteOwnAccount);

module.exports = router;