const router = require('express').Router()
const schema = require('../schemas/user')
const validator = require('../middlewares/validator')
const accountExistsSignUp = require('../middlewares/accountExistsSignUp')
const accountExistsSignIn = require('../middlewares/accountExistsSignIn')
const accountHasBeenVerified = require('../middlewares/accountHasBeenVerified')
const mustSignIn = require('../middlewares/mustSignIn')
const { register,logIn,verified, logInWithToken, logOut} = require('../controllers/usuario')
const passport = require('../config/passport')


router.post('/signup', validator(schema), accountExistsSignUp, register)

router.get('/verify/:code', verified)


let {create} = require('../controllers/admin')

router.post("/users", create);

module.exports = router