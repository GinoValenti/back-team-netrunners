let router = require('express').Router()

const { readOne, create, update, destroy } = require('../controllers/itinerary')


router.get("/", readOne)
router.post("/", create)
router.put("/itineraryUpdate/:id", update)
router.delete("/itineraryDelete/:id", destroy)


module.exports = router