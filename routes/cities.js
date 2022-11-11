let router = require('express').Router()

let {create, read} = require('../controllers/city')

router.post("/cities", create);
router.get("/cities", read)

module.exports = router