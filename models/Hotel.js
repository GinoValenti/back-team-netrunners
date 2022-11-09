
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    photo: [{type: String, required: true}],
    capacity: {type: Number, required: true},
    citiId: {type: String, required: true},
})



const Hotel = mongoose.model('hotels',schema)
module.exports = Hotel