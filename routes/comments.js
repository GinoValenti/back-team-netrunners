let router = require("express").Router()
let {read,create,deleted,update} = require("../controllers/comments")


const passport = require('../config/passport')
router.route('/comments').get(read)

router.route('/comments').post(passport.authenticate('jwt', {session: false}),create)
router.route('/comments/:id').put(update)
router.route('/comments/:id').delete(passport.authenticate('jwt', {session: false}),deleted)


module.exports = router