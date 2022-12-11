const mongoose = require("mongoose")
const URL = require('dotenv').config().parsed.Mongo_url
mongoose.set('strictQuery',false)
const connect = mongoose.connect(URL)
module.exports = {connect}