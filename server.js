require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
require('./config/dbConnect')();
const mentorRoute = require("./routes/mentorRoute")
const studentRoute = require("./routes/studentRoute")
const assignRoute = require("./routes/assignRoute")


app.use(cors())
const issue2options = {
  origin: '*',
  methods: ["POST"],
  credentials: true,
  maxAge: 3600
};
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get("/", (req,res) => {
    res.send("Mentor and Student")
})

app.use("/api/mentor", mentorRoute)
app.use("/api/student", studentRoute)
app.options("/api/assign", cors(issue2options));
app.use("/api/assign", cors(issue2options), assignRoute)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
