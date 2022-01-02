var ObjectId = require('mongodb').ObjectID
const express = require('express')
const mentorRoute = express.Router()
const Mentor = require("../models/mentor")
const Student = require("../models/student")

mentorRoute.post('/', async(req,res) => {
    const mentor = await Mentor.create(req.body)
    res.send("Mentor Created")
    res.json(mentor)
})

mentorRoute.get('/list', async(req, res) => {
    const mentor = await Mentor.find()
     res.json(mentor)
 })

mentorRoute.get('/student/:id', async(req, res) => {
   const mentor = await Mentor.findById(req.params.id).populate("students", "name", Student)
    res.json(mentor)
})

module.exports = mentorRoute
