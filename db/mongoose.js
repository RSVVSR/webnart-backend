const mongoose = require("mongoose")



mongoose.connect("mongodb+srv://webnart:WebnartRohanShashankvishal@cluster0.stxa69v.mongodb.net/Webnart", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connection Successfull")
}).catch((err) => {
    console.log("Connecting Database Error", err)
})

// mongoose.connect(process.env.mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log('DB Connection Successfull'))
//     .catch((err) => {
//         console.error(err);
//     });
module.exports = mongoose