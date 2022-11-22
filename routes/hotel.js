let router = require("express").Router()
const schema = require("../schemas/hotel")
const validator = require("../middlewares/validator")
let {create, read,one,update,deleted} = require("../controllers/hotel")

//uso el metodo post para crear un nuevo usuario
router.route("/hotels").post(validator(schema),create)
router.route("/hotels").get(read)
router.route('/hotels/:id').get(one)
router.route('/hotels/:id').patch(update)
router.route('/hotels/:id').delete(deleted)


module.exports = router