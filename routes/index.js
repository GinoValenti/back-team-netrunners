let router = require("express").Router()

let hotels = require("./hotel") //ubicacion de las rutas de hoteles
 router.use("/", hotels)

let shows = require("./show")

router.use("/", shows)





module.exports = router 