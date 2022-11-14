let router = require("express").Router()

let {create, read,one} = require("../controllers/hotel")

//uso el metodo post para crear un nuevo usuario
router.route("/hotels").post(create)
router.route("/hotels").get(read)
router.route('/hotels/:id').get(one)

module.exports = router