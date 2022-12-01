const router = require('express').Router()
const passport = require('../config/passport')

let { create, postReactions, read } = require('../controllers/reactions')

router.post("/",passport.authenticate('jwt', {session:false}), create)
router.put("/",passport.authenticate('jwt', {session: false}), postReactions)
router.get("/", read)
module.exports = router