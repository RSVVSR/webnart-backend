const mongoose = require("mongoose")
const { ObjectId } = require("mongodb")

const artSchema = mongoose.Schema({
    owner_id: {
        type: ObjectId,
        ref: "users"
    },
    category: [],
    file: String,
    external_links: String,
    is_Shareable: String,
    category_id: String,
    content_id: String,
    content_name: String,
    comment: [],
    Key_words: [],
    liked: [],
    ss_downloadable: Boolean

})

const artModel = mongoose.model("art", artSchema, "art")
module.exports = artModel