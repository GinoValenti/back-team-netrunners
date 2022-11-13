let router = require('express').Router()

let city = require('./cities')
let user = require('./users')
let itineraries = require('./itinerary')

router.use('/cities', city)
router.use('/users', user)
router.use('/cities/:id', city)
router.use('/itineraries', itineraries)

let hotels = require("./hotel") //ubicacion de las rutas de hoteles
 router.use("/", hotels)



module.exports = router 