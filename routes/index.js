let router = require('express').Router()

let city = require('./cities')
let user = require('./users')
let itineraries = require('./itinerary')

router.use('/cities', city)
router.use('/users', user)
router.use('/cities/:id', city)
router.use('/itinerary', itineraries)

let hotels = require("./hotel") //ubicacion de las rutas de hoteles
 router.use("/", hotels)

let shows = require("./show")

router.use("/", shows)





module.exports = router 