const { db } = require('../../database/databaseConnection');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        let body = req.body;
        if (body.email === undefined || body.password === undefined) {
            let missingField = body.email === undefined ? 'email' : 'Password';
            return res.status(400).json({
                "status": 400,
                "data": null,
                "message": `Bad Request, Reason:${missingField} is missing.`,
                "error": null
            });
        }
        //To do  #1 difference btween email and username so the query can use only parameter
        const data = await db.one(`select email,password from user_table where email = '${body.email}'  AND  password = '${body.password}'`).then((result) => {
            if (result) {

                const accessToken = jwt.sign(body.email, process.env.jwtToken);
                console.log(accessToken)
                // const authData = db.none(`insert into authtable(authToken ,role)` + `values( '${body.email}' , '${result.role}' )`, req.body).then(() => { });  when authroization occur;
                res.status(200).json({
                    "status": 200,
                    "data": {
                        "token": accessToken
                    },
                    "message": "Login successful.",
                    "error": null
                })
            }
        });
    } catch (e) {
        if (e.received === 0) {
            return res.status(404).json({
                "status": 404,
                "data": null,
                "message": "User not found.",
                "error": null
            });
        }
    }
}

const logout = async (req, res) => {
    return res.status(200).json({
        "status": 200,
        "data": null,
        "message": "Logout successful.",
        "error": null
    });
}
const signUp = async (req, res) => {

    var queryData = null;

    if (req.body?.username && req.body?.email && req.body?.password) {
        {
            queryData = [req.body.username, req.body.email, req.body.password];
        }
    } else {
        return res.status(400).json({
            "status": 400,
            "data": null,
            "message": `Bad Request. Missing parameter.`,
            "error": null
        });
    }
    await db.none(`insert into  user_table(username,email,password) values ($1,$2,$3);`, queryData).then((data) => {
        return res.status(200).json({
            "status": 200,
            "data": null,
            "message": `User created successfully.`,
            "error": null
        })
    }).catch((err) => {
        console.log(err);
        return res.status(200).json({
            "status": 409,
            "data": null,
            "message": "Email already exists.",
            "error": null
        })
    });
}

module.exports = {
    login, logout, signUp
}