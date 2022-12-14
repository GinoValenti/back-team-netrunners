const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    photo: {type: String},
    email:{type: String, required: true},
    password:{type: String, required: true},
    code:{type: String, required: true},
    role: {type: String},
    verified:{type: Boolean},
    logged:{type: Boolean},
})
const User = mongoose.model("user", schema)
module.exports= User