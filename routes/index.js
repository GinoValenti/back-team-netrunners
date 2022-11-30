let router = require('express').Router()

let city = require('./cities')
let user = require('./users')
let comments = require("./comments")
let itineraries = require('./itinerary')
router.use('/cities', city)
router.use('/auth', user)
router.use('/cities/:id', city)
router.use('/itinerary', itineraries)
let hotels = require("./hotel") //ubicacion de las rutas de hoteles
 router.use("/", hotels)
 router.use("/", comments)
let shows = require("./show")

router.use("/", shows)





module.exports = router 