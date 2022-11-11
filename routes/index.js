let router = require('express').Router()

let city = require('./cities')
let user = require('./users')

router.use('/', city)
router.use('/', user)



module.exports = router;
