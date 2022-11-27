const router = require('express').Router()
const schema = require('../schemas/user')
const validator = require('../middlewares/validator')
const accountExistsSignUp = require('../middlewares/accountExistsSignUp')
const accountExistsSignIn = require('../middlewares/accountExistsSignIn')
const accountHasBeenVerified = require('../middlewares/accountHasBeenVerified')
const mustSignIn = require('../middlewares/mustSignIn')
const { register,verified, readUsers} = require('../controllers/usuario')
const { ingresar, ingresarConToken, salir,one,update} = require('../controllers/user')
const passport = require('../config/passport')


router.get('/users', readUsers)

router.post('/signup', validator(schema), accountExistsSignUp, register)

router.get('/verify/:code', verified)
router.route('/me/:id').get(one)
router.route('/me/:id').patch(update)
const schemaLogin = require("../schemas/userLogin")

router.post('/signin',validator(schemaLogin), accountExistsSignIn,accountHasBeenVerified,ingresar)
router.post('/token', passport.authenticate('jwt', {session: false}), mustSignIn, ingresarConToken)
router.put('/signout', passport.authenticate('jwt', {session: false}), salir)
module.exports = router