const router = require('express').Router()
const schema = require('../schemas/city')
const validator = require('../middlewares/validator')
const passport = require('../config/passport')

let {create, read, update, destroy, readOne} = require('../controllers/city')

router.route("/").post(validator(schema), passport.authenticate('jwt', {session:false}),create)

/* router.post("/", create) */
router.get("/", read)
router.get("/:id", readOne)
router.put("/citiesUpdate/:id", passport.authenticate('jwt', {session:false}), update)
router.delete("/citiesDelete/:id", passport.authenticate('jwt',{session:false}), destroy)

module.exports = router

/* router.delete("/itineraryDelete/:id", passport.authenticate('jwt', {session:false}), destroy) */