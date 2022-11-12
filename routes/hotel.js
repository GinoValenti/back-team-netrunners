let router = require("express").Router()

let {create} = require("../controllers/hotel")

//uso el metodo post para crear un nuevo usuario
router.route("/hotels").post(create)


module.exports = router