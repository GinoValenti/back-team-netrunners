let router = require('express').Router()

const { readOne, create, update, destroy, read } = require('../controllers/itinerary')

router.get('/', read)
router.get("/itinerary", readOne)
router.post("/", create)
router.put("/itineraryUpdate/:id", update)
router.delete("/itineraryDelete/:id", destroy)


module.exports = router