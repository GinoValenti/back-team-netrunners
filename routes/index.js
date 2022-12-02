let router = require('express').Router()

const city = require('./cities')
const user = require('./users')
const itineraries = require('./itinerary')
const reactions = require('./reactions')

router.use('/reactions', reactions)

let comments = require("./comments")

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