const { db } = require('../../../database/databaseConnection');
const { handleError } = require('../../../config/Errorhandler');
const getProfileByUsername = async (req, res) => {
    const body = req.params;
    if (body?.username === undefined) {
        return handleError(res, "username key is required", null, 400);
    };
    try {
        await db.any(`SELECT user_id, username,email
    ,full_name,bio,website,designation,
    address,contact,location,profile_image,social_profile FROM user_table WHERE username = '${body.username}';`).then((data) => {
            if (data.length == 0) { return handleError(res, "User Not found", null, 400); }
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
        console.log(err)
        return handleError(res, "Bad request", err, 400);
    }
}
const getAllUser = async (req, res) => {
    try {
        await db.any(`SELECT user_id,username
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
    if (req.body?.key === undefined) {
        return handleError(res, "key is required", null, 400);
    };
    try {
        await db.any(`SELECT ${req.body.key} FROM user_table WHERE username = '${req.params.username}';`).then((data) => {
            if (data.length == 0) {
                return handleError(res, "User Not Found", null, 400);
            }
            return res.status(200).json({
                status: "success",
                data: data[0],
                message: `${req.body.key} fetched successfully`,
                error: null
            })
        }).catch(err => {
            console.log(err);
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