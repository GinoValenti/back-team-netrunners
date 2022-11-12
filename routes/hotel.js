let router = require("express").Router()

let {create, read} = require("../controllers/hotel")

//uso el metodo post para crear un nuevo usuario
router.route("/hotels").post(create)
router.route("/hotels").get(read)


module.exports = router