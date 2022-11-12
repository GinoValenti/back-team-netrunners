let router = require('express').Router()

let city = require('./cities')
let user = require('./users')

router.use('/', city)
router.use('/', user)

let hotels = require("./hotel") //ubicacion de las rutas de hoteles
 router.use("/", hotels)



module.exports = router 