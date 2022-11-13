let router = require('express').Router()

let {create, read, update} = require('../controllers/city')

router.post("/cities", create);
router.get("/cities", read)
router.put("/citiesUpdate/:id", update)

module.exports = router