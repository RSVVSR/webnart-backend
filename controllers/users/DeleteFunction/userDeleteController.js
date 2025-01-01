const { db } = require('../../../database/databaseConnection');
const { handleError } = require('../../../config/Errorhandler');

const deleteUserByUsername = async (req, res) => {
    const body = req.params;
    if (body?.username === undefined) {
        return handleError(res, "username key is required", null, 400);
    };
    try {

        await db.any(`SELECT email FROM user_table WHERE username = '${body.username}';`).then((data) => {
            if (data.length != 0) {
                db.oneOrNone(`DELETE FROM user_table WHERE username = '${body.username}';`).then((data) => {
                    return res.status(200).json({
                        status: "success",
                        data: data,
                        message: "User deleted successfully",
                        error: null
                    })
                });
            }
            else {
                return handleError(res, "User Not found", null, 400);
            }
        }).catch(err => {
            console.log(err)
            return handleError(res, "User Not found", err, 400);
        });
    }
    catch (err) {
        return handleError(res, "Bad request", err, 400);
    }
}
module.exports = {
    deleteUserByUsername: deleteUserByUsername
}