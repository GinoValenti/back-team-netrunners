let router = require('express').Router()

let {create, read, update, destroy} = require('../controllers/itinerary')


router.get("/itinerary", read)


module.exports = router