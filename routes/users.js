let router = require('express').Router()

let {create} = require('../controllers/admin')

router.post("/users", create);

module.exports = router