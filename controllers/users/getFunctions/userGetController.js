const { db } = require('../../../database/databaseConnection');
const { handleError } = require('../../../config/Errorhandler');
const getProfileByUsername = async (req, res) => {
    const { body } = req.params;
    if (body?.username === undefined) {
        return handleError(res, "username key is required", null, 400);
    };
    try {
        await db.none(`SELECT user_id, username,email
    ,full_name,bio,website,designation,
    address,contact,location,profile_image,social_profile FROM user_table WHERE username = '${body.username}';`).then((data) => {
            return res.status(200).json({
                status: "success",
                data: data,
                message: "User profile fetched successfully",
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
const getAllUser = async (req, res) => {
    try {
        await db.any(`SELECT user_id,user_name
            ,full_name,bio,website,designation,
            profile_image,social_profile FROM user_table;`).then((data) => {
            return res.status(200).json({
                status: "success",
                data: data,
                message: "All User fetched successfully",
                error: null
            })
        }).catch(err => {
            return handleError(res, "Users Not Found", err, 400);
        })
    }
    catch (err) {
        return handleError(res, "Bad request", err, 400);
    }
}
const getInfoAccordingTokey = async (req, res) => {
    const { body } = req.body;
    if (body?.key === undefined) {
        return handleError(res, "key is required", err, 400);
    };
    try {
        await db.any(`SELECT ${body.key} FROM user_table WHERE user_id = '${body.user_id}';`).then((data) => {
            return res.status(200).json({
                status: "success",
                data: data,
                message: `${body.key} fetched successfully`,
                error: null
            })
        }).catch(err => {
            return handleError(res, "User Not Found", err, 400);
        })
    }
    catch (err) {
        return handleError(res, "Bad request", err, 400);
    }
}

module.exports = {
    getProfileByUsername: getProfileByUsername,
    getAllUser: getAllUser,
    getInfoAccordingTokey: getInfoAccordingTokey
}