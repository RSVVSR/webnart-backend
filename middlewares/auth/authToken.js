const jwt = require('jsonwebtoken');

const authToken = (req, res, next) => {
    const authHeader = req.headers["authorization"]

    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.status(400).json({
        "status": 400,
        "data": null,
        "message": "Bad Request, Reason: Token is missing.",
        "error": null
    });

    jwt.verify(token, process.env.jwtToken, (err, email) => {
        if (err) return res.status(401).json({
            "status": 401,
            "data": null,
            "message": "Unauthorized Access",
            "error": null
        })
        req.email = email;
        next();
    })
};

module.exports = authToken;