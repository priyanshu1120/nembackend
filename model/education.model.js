const mongoose = require("mongoose")


const educationSchema = mongoose.Schema({
    degree:{type:String},
    year:{type:Number},
    userID : {type:String},
})

const EducationModel = mongoose.model("education",educationSchema)
module.exports = {EducationModel}