let router = require('express').Router()

const { readOne, create, update } = require('../controllers/itinerary')


router.get("/", readOne)
router.post("/", create)
router.put("/itinerary/:id", update)


module.exports = router