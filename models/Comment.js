
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    
    comment: {type: String, required: true},
    date: {type: Date, required: true},
    showId:{type: mongoose.Types.ObjectId, ref: 'show', required: true},
    photo:{type: String, required: true},
    userId:{type: mongoose.Types.ObjectId, ref: 'user', required: true},
})



const Comment = mongoose.model('comment',schema)
module.exports = Comment