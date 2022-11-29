let router = require("express").Router()
const schema = require("../schemas/hotel")
const validator = require("../middlewares/validator")
let {create, read,one,update,deleted} = require("../controllers/hotel")
const passport = require('../config/passport')
//uso el metodo post para crear un nuevo usuario
router.route("/hotels").post(validator(schema),passport.authenticate('jwt', {session: false}),create)
router.route("/hotels").get(read)
router.route('/hotels/:id').get(one)
router.route('/hotels/:id').patch(passport.authenticate('jwt', {session: false}),update)
router.route('/hotels/:id').delete(passport.authenticate('jwt', {session: false}),deleted)


module.exports = router