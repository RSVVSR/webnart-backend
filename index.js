const express = require("express")
require('dotenv').config({ path: './config/dev.env' })
require("./db/mongoose")
const cors = require("cors");
const usersRouter = require("./routers/userRouter")
// const movieRouter = require("./routers/movieRouter")
// const playlistRouter = require("./routers/playlistRouter")
const corsOptions = {
    origin: "*",
    // credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
const bodyParser = require("body-parser");

const app = express()
const PORT = process.env.PORT || 3001



app.use(cors(corsOptions))
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.use("/api/v1", usersRouter)
// app.use("/api/v1", movieRouter)
// app.use("/api/v1", playlistRouter)

app.listen(PORT, () => {
    console.log("Port Running on :-", PORT)
})