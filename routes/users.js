let router = require('express').Router()
const accountExistsSignIn = require('../middlewares/accountExistsSignIn')
const mustSignIn = require('../middlewares/mustSignIn')
const { ingresar, ingresarConToken, salir } = require('../controllers/user')
const accountHasBeenVerified = require('../middlewares/accountHasBeenVerified')
const passport = require('../config/passport')
const schema = require("../schemas/userLogin")
const validator = require("../middlewares/validator")


router.post('/signin',validator(schema), accountExistsSignIn,accountHasBeenVerified,ingresar)
router.post('/token', passport.authenticate('jwt', {session: false}), mustSignIn, ingresarConToken)
router.put('/signout', passport.authenticate('jwt', {session: false}), salir)
module.exports = router