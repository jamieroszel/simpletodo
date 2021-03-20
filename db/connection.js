////////////////////////////////////
// Import Dependencies
////////////////////////////////////
require("dotenv").config() // get the .env variables
const mongoose = require("mongoose") // bring in mongoose
const {log} = require("mercedlogger") // colorful logs

const MONGODB_URI = process.env.MONGODB_URI // getting mongo uri
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// CONNECT TO MONGO
mongoose.connect(MONGODB_URI, config)

//Use the connection object to send message
mongoose.connection
.on("open", () => log.green("DB STATUS", "Connected to Mongo"))
.on("close", () => log.red("DB STAUS", "Connection closed"))
.on("error", (error) => log.red("DB ERROR", error))

module.exports = mongoose