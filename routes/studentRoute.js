const express = require("express")
const studentRoute = express.Router()
const Student =  require("../models/student")

studentRoute.post("/", async(req,res) => {
    const student = await Student.create(req.body)
    res.json(student)
})

studentRoute.get("/list", async(req,res) => {
    const student = await Student.find()
    res.json(student)
})

studentRoute.get("/:id", async(req,res) => {
    const student = await Student.findById(req.params.id)
    res.json(student)
})


module.exports = studentRoute