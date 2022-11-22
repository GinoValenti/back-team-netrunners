const router = require('express').Router()
const schema = require('../schemas/city')
const validator = require('../middlewares/validator')

let {create, read, update, destroy, readOne} = require('../controllers/city')

router.route("/").post(validator(schema),create)

/* router.post("/", create) */
router.get("/", read)
router.get("/:id", readOne)
router.put("/citiesUpdate/:id", update)
router.delete("/citiesDelete/:id", destroy)

module.exports = router