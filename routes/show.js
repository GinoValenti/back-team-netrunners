let router = require("express").Router()

let { readOne} = require("../controllers/show")

//uso el metodo post para crear un nuevo usuario

router.route('/show').get(readOne)

module.exports = router