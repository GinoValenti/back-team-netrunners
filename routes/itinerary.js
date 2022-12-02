let router = require('express').Router()
const passport = require('../config/passport')

const { readOne, create, update, destroy, read } = require('../controllers/itinerary')

router.get('/', read)
router.get("/itinerary", readOne)
router.post("/", passport.authenticate('jwt', {session: false}), create)
router.put("/itineraryUpdate/:id", passport.authenticate('jwt', {session: false}), update)
router.delete("/itineraryDelete/:id", passport.authenticate('jwt', {session:false}), destroy)


module.exports = router