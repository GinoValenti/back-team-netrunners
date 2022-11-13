let router = require('express').Router()

const { readOne } = require('../controllers/itinerary')


router.get("/", readOne)


module.exports = router