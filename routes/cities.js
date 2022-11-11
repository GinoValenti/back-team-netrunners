let router = require('express').Router()

let {create} = require('../controllers/city')

router.post("/cities", create);

module.exports = router