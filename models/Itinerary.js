const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    cityId: {type: mongoose.Types.ObjectId, ref: 'city', required: true},
    name: {type: String, required: true},
    photo: [{type: String, required: true}],
    description: {type: String, required: true},
    price: {type: Number, required: true},
    duration: {type: Number, required: true},
    userId:{type: mongoose.Types.ObjectId, ref: 'user', required: true},
})

const Itinerary = mongoose.model('itinerary', schema)
module.exports = Itinerary