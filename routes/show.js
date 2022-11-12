let router = require("express").Router()

let { one} = require("../controllers/show")

//uso el metodo post para crear un nuevo usuario

router.route('/show').get(one)

module.exports = router