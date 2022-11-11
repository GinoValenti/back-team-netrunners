let router = require('express').Router()

let city = require('./cities')

router.use('/', city)



module.exports = router;
