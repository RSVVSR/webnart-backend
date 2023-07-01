const usersModel = require("../models/usersModel")

const addNewUsers = async (req, res) => {

    // name email password profile photo
    try {
        // console.log(req.body)
        const isUser = await usersModel.findOne({ email: req.body.email })

        if (isUser) return res.send({ err: "User Already Registered" })

        // // var encryptedPassword = await bcrypt.hash(req.body.password, 10);
        const data = {
            username: req.body.username,
            bio: req.body.bio,
            website: req.body.website,
            address: req.body.address,
            designation: req.body.designation,
            email: req.body.email,
            password: req.body.password,
            full_name: req.body.full_name,
            contact: req.body.contact,
            location: req.body.location,
            content_creator: req.body.content_creator,

        }

        await new usersModel(data).save().catch((err) => {
            console.log("Error in saving data in user table", err)
        })
        // await new usersModel(req.body).save().catch((err) => {
        //     console.log("Error in saving data in user table")
        // })
        res.send("Register Succesfull")


    } catch (e) {
        console.log("Error in Adding New User", e)
        res.send({ errMsg: "There is some error while registering new users , Please Try Again" })
    }
}




module.exports = { addNewUsers }





function getCurrentDate() {
    const d = new Date();
    return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`

}
