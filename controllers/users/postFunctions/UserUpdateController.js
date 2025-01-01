const { db } = require('../../../database/databaseConnection');
const { handleError } = require('../../../config/Errorhandler');

const updateUserKeys = async (req, res) => {
    let updateFields = [];
    for (const key in req.body) {
        updateFields.push(`${key} = '${req.body[key]}'`);
    }
    try {
        await db.query(`update user_table set ${updateFields.join()} where username = ${req.params.username};`).then((data) => {
            return res.status(200).json({
                status: "success",
                data: null,
                message: "User updated",
                error: null
            });
        }).catch(err => {
            return handleError(res, "User Not found", err, 400);
        });
    }
    catch (err) {
        return handleError(res, "Bad request", err, 400);
    }
}
module.exports = {
    updateUserKeys: updateUserKeys
}