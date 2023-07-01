const express = require("express")
const router = express.Router()



router.route("/register").post(upload.single("file"), addNewUsers)





module.exports = router