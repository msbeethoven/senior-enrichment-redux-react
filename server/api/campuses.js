const router = require('express').Router();
const {db, Student, Campus} = require('../db/models/index')

//GET route to serve up all campuses
router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.status(200).json(campuses)
  }
  catch (error) {
    next(error)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.json(newCampus);
  } catch (error){
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findById(req.params.id);
    if (campus) {
      res.status(200).json(campus)
    } else {
      res.status(404).send('End of the galaxy');
    }
  }
  catch (error){
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(campus)
  }
  catch (error){
    next(error)
  }
})

module.exports = router;