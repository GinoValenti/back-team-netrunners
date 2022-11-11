let router = require("express").Router()

let hotels = require("./hotel") //ubicacion de las rutas de hoteles
 router.use("/", hotels)









module.exports = router 