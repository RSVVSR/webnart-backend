const express = require("express")
const { addNewUsers } = require("../controllers/userController")
const login = require("../middleware/login")
const router = express.Router()



router.route("/register").post(addNewUsers)

router.route("/login").post(login)



module.exports = router