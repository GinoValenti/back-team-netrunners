let router = require('express').Router()

let {create, read, update, destroy, readOne} = require('../controllers/city')

router.post("/", create)
router.get("/", read)
router.get("/:id", readOne)
router.put("/citiesUpdate/:id", update)
router.delete("/citiesDelete/:id", destroy)

module.exports = router