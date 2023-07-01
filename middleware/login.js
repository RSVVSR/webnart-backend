const usersModel = require("../models/usersModel")
// const shortUniqueId = require("short-unique-id")
// // const uid = new shortUniqueId({ length: 10 })
const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")

const login = async (req, res) => {
    try {
        var data = await usersModel.findOne({ email: req.body.email })

        if (!data) return res.json({ errMsg: "Account not found" })
        if (!req.body.password) return res.json({ errMsg: "Please Enter Password" })

        if (req.body.password !== data.password) return res.send({ errMsg: "Please Enter Correct Password" })
        const accessToken = jwt.sign(req.body.email, "qwerty")
        // console.log(accessToken)
        res.send({
            accessToken: accessToken,
        })
        // bcrypt.compare(req.body.password, data.password, (err, result) => {
        //     if (!result) return res.send({ errMsg: "Please Enter Correct Password" })
        //     const accessToken = jwt.sign(req.body.email, process.env.jwtToken)
        //     // console.log(accessToken)
        //     res.send({
        //         accessToken: accessToken,
        //     })
        // })
    } catch (e) {
        console.log(e + " error in react login")
    }
}

module.exports = login 