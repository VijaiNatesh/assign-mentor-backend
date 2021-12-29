const mongoose = require('mongoose')
const conn = mongoose.createConnection("mongodb+srv://vijay:vijay123123@cluster0.5xxxy.mongodb.net/test")

const MentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})


const Mentor = conn.model("Mentor", MentorSchema)
module.exports = Mentor