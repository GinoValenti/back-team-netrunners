let router = require("express").Router()
let {read,create,deleted,update} = require("../controllers/comments")
const schema = require("../schemas/comments")
const validator = require("../middlewares/validator")
const passport = require('../config/passport')
const isTheSameUser = require('../middlewares/isTheUser')
const Comment = require("../models/Comment");
router.route('/comments').get(read)
router.route('/comments').post(validator(schema),passport.authenticate('jwt', {session: false}),create)
router.route('/comments/:id').put(passport.authenticate('jwt', {session: false}),isTheSameUser(Comment),update)
router.route('/comments/:id').delete(passport.authenticate('jwt', {session: false}),isTheSameUser(Comment), deleted)

module.exports = router