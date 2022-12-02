let router = require("express").Router()
let {read,create} = require("../controllers/comments")
const passport = require('../config/passport')
router.route('/comments').get(read)
router.route('/comments').post(create)

module.exports = router