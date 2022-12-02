const router = require('express').Router()
const passport = require('../config/passport')
const isTheUser = require('../middlewares/isTheUser');
const Reaction = require('../models/Reaction')


let { create, postReactions, read, destroy} = require('../controllers/reactions')

router.post("/",passport.authenticate('jwt', {session:false}), create)
router.put("/",passport.authenticate('jwt', {session: false}), postReactions)
router.get("/",passport.authenticate('jwt', {session: false}), read)

router.put('/:id',passport.authenticate("jwt", { session: false }), isTheUser(Reaction), destroy)
module.exports = router