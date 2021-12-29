const mongoose = require("mongoose")
const conn = mongoose.createConnection("mongodb+srv://vijay:vijay123123@cluster0.5xxxy.mongodb.net/test")


const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true   
    },
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentor",
        required: true,        
    }
})

const Student =  conn.model("Student", StudentSchema)
module.exports = Student