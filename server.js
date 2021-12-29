require('dotenv').config()
const express = require('express')
const app = express()
require('./config/dbConnect')();
const mentorRoute = require("./routes/mentorRoute")
const studentRoute = require("./routes/studentRoute")

app.use(express.json())
app.get("/", (req,res) => {
    res.send("Mentor and Student")
})
app.use("/api/mentor", mentorRoute)
app.use("/api/student", studentRoute)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})