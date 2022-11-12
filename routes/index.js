let router = require('express').Router()

let city = require('./cities')

router.use('/', city)

let hotels = require("./hotel") //ubicacion de las rutas de hoteles
 router.use("/", hotels)



module.exports = router 