let router = require("express").Router()
const passport = require('../config/passport')
let { readOne,create,update,deleted,read} = require("../controllers/show")

//uso el metodo post para crear un nuevo usuario

router.route('/show').get(readOne)
router.route("/shows").post(passport.authenticate('jwt', {session: false}),create)
router.route('/shows').get(read)
router.route("/shows/:id").patch(passport.authenticate('jwt', {session: false}),update)
router.route("/shows/:id").delete(passport.authenticate('jwt', {session: false}),deleted)


module.exports = router