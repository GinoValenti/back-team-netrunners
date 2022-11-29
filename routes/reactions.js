const router = require('express').Router()
const passport = require('../config/passport')

let { create } = require('../controllers/reactions')

router.post("/",passport.authenticate('jwt', {session:false}), create)

module.exports = router