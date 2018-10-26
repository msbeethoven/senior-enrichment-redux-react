const router = require('express').Router();
//const {Campus, Student} = require('../db/models');
const {db, Campus, Student} = require('../db/models/index')

//console.log("WHAT DID WE REQUIRE?", Student)
//GET route to serve up all students 
router.get('/', async (req, res, next) => {
  //console.log("Student", Student)
  try {
    
    const students = await Student.findAll({
      include: [{
        model: Campus
      }]
    });
    
    res.status(200).json(students)
  }
  catch (error){
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    console.log('REQBODY', req.body)
    const newStudent = await Student.create(req.body)
    res.json(newStudent)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id, {
      include: [{
        model: Campus
      }]
    });
    if (student) {
      res.status(200).json(student)
    } else {
      res.status(404).send('No sign of intelligent life');
    }
  }
  catch (error){
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const student = await Student.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(student)
  }
  catch (error){
    next(error)
  }
})


module.exports = router;