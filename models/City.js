const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: {type: String, required: true},
    continent: {type: String, required: true},
    image: {type: String, required: true},
    population: {type: Number, required: true},
    userId:{type: String, required: true},
})

const City = mongoose.model('city', schema)
module.exports = City