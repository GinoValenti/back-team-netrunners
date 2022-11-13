let router = require('express').Router()

let {create, read, update, destroy} = require('../controllers/city')

router.post("/cities", create);
router.get("/cities", read)
router.put("/citiesUpdate/:id", update)
router.delete("/citiesDelete/:id", destroy)

module.exports = router