var ObjectId = require('mongodb').ObjectID
const express = require('express')
const assignRoute = express.Router();
const Mentor = require("../models/mentor")
const Student = require("../models/student")


assignRoute.post('/studenttomentor', async(req, res) => {
   
    const mentor = await Mentor.findById(ObjectId(req.body.mentorId))
    mentor.students = [
        ...mentor.students,
        ...ObjectId(req.body.students)
    ]
    mentor.save();
    req.body.students.forEach(async(student) => {
        const assign = await Student.findById(student)
        assign.mentor = ObjectId(req.body.mentorId)
        assign.save()
    })   
    res.json(mentor)
})

assignRoute.post('/editstudentmentor', async(req,res) => {
    const student = await Student.findById(req.body.studentId)
    let existingMentorId = student.mentor;
    student.mentor = req.body.newMentorId;
    res.json(student)
    
    let existingMentor = await Mentor.findById(existingMentorId)

    if(existingMentor.students.length < 0){
        return 
    }
    else{
        let newAssignedMentor = existingMentor.students
        const indexofStudent = newAssignedMentor.indexOf(new ObjectId(req.body.studentId))
        newAssignedMentor.pop(indexofStudent)
        existingMentor.students = newAssignedMentor
    }
    existingMentor.save();
    
    let newMentor = await Mentor.findById(req.body.newMentorId)
    if (newMentor.students.length < 0) {
        return;
      } else {
        if (!newMentor.students.includes(req.body.studentId)) {
          newMentor.students = [
            ...newMentor.students,
            req.body.studentId,
          ];
        }
      }
      newMentor.save();

})
module.exports = assignRoute
