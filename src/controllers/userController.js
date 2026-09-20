const userService = require("../services/userService");

async function deleteOwnAccount(req, res) {
    try {
        await userService.deleteOwnAccount(req.user.id);

        res.status(200).json({
            success: true,
            message: "Account and associated data deleted successfully.",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = {
    deleteOwnAccount,
};