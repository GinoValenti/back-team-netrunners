let router = require('express').Router()

const { readOne, create, update, destroy } = require('../controllers/itinerary')


router.get("/", readOne)
router.post("/", create)
router.put("/itinerary/:id", update)
router.delete("/itinerary/:id", destroy)


module.exports = router