const userRepository = require("../persistence/userRepository");

async function deleteOwnAccount(userId) {
    return await userRepository.deleteUser(userId);
}

module.exports = {
    deleteOwnAccount,
};