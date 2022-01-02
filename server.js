require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
require('./config/dbConnect')();
const mentorRoute = require("./routes/mentorRoute")
const studentRoute = require("./routes/studentRoute")
const assignRoute = require("./routes/assignRoute")

const corsOptions = {
   origin: '*',
   credentials: true, 
   optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get("/", (req,res) => {
    res.send("Mentor and Student")
})

app.use("/api/mentor", mentorRoute)
app.use("/api/student", studentRoute)
app.use("/api/assign",  assignRoute)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
