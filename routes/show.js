let router = require("express").Router()

let { readOne,create,update,deleted} = require("../controllers/show")

//uso el metodo post para crear un nuevo usuario

router.route('/show').get(readOne)
router.route("/shows").post(create)
router.route("/shows/:id").patch(update)
router.route("/shows/:id").delete(deleted)


module.exports = router