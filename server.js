require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
require('./config/dbConnect')();
const mentorRoute = require("./routes/mentorRoute")
const studentRoute = require("./routes/studentRoute")
const assignRoute = require("./routes/assignRoute")

app.use((req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
     res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json())

app.get("/", (req,res) => {
    res.send("Mentor and Student")
})

app.use("/api/mentor", mentorRoute)
app.use("/api/student", studentRoute)
app.use("/api/assign", assignRoute)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
