const { db } = require('../../../database/databaseConnection');
const { handleError } = require('../../../config/Errorhandler');

const deleteUserByUsername = async (req, res) => {
    const { body } = req.body;
    if (body?.username === undefined) {
        return handleError(res, "username key is required", null, 400);
    };
    try {
        await db.none(`DELETE FROM user_table WHERE username = '${body.username}';`).then((data) => {
            return res.status(200).json({
                status: "success",
                data: null,
                message: "User deleted successfully",
                error: null
            })
        }).catch(err => {
            return handleError(res, "User Not found", err, 400);
        })
    }
    catch (err) {
        return handleError(res, "Bad request", err, 400);
    }
}
module.exports = {
    deleteUserByUsername: deleteUserByUsername
}