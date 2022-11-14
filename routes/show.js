let router = require("express").Router()

let { readOne,create} = require("../controllers/show")

//uso el metodo post para crear un nuevo usuario

router.route('/show').get(readOne)
router.route("/shows").post(create)

module.exports = router