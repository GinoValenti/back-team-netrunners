const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    hotelId:{type: mongoose.Types.ObjectId, ref: 'hotels', required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    photo: {type: String, required: true},
    price : {type: Number, required: true},
    date: {type: String, required: true},
    userId:{type: mongoose.Types.ObjectId, ref: 'user', required: true},
})

const Show = mongoose.model('show', schema)
module.exports = Show