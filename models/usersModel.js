const mongoose = require("mongoose")
const { ObjectId } = require("mongodb")

const userSchema = mongoose.Schema({
    username: String,
    bio: String,
    website: String,
    address: String,
    designation: String,
    email: String,
    password: String,
    full_name: String,
    contact: String,
    location: String,
    profile_image: String,
    content_creator_id: String,
    liked: [],
    saved: [],
    social_profile: []

})

const usersModel = mongoose.model("users", userSchema, "users")
module.exports = usersModel

