var ObjectId = require('mongodb').ObjectID
const express = require('express')
const mentorRoute = express.Router()
const Mentor = require("../models/mentor")


mentorRoute.post('/', async(req,res) => {
    const mentor = await Mentor.create(req.body)
    res.json(mentor)
})

mentorRoute.get('/student/:id', async(req, res) => {
    const students = await Mentor.aggregate([
        {
            $match: {
                _id: new ObjectId(req.params.id)
            }
        },
        {
            $lookup: {
                from: "students",
                localField: "_id",
                foreignField: "mentor",
                as: "student"
            }
        },
        {
            $unwind: "$student"
        },
        {
            $addFields: {
                "student" : "$student.name",
                "studentid" : "$student._id"
            }
        },
        {
            $project: {
                name: 1,
                student : 1,
                studentid : 1
            }
        }
    ])
    res.json(students)
})

module.exports = mentorRoute