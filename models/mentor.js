const mongoose = require('mongoose')
const conn = mongoose.createConnection(process.env.MONGO_URL)

const MentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            default: true
        }
    ]
})


const Mentor = conn.model("Mentor", MentorSchema)
module.exports = Mentor