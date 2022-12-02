const joi = require("joi")
const schema = joi.object({
    name:
     joi.string()
    .required()
    .min(3)
    .max(50)
    .messages({
        "any.required": "Please enter a name",
        "string.empty": "Please enter a name",
        "string.min":" Name must have at least three letters",
        "string.max":" Name must have at least fifty letters",
        "string.max":"Please enter a valid name"
    })
    ,
    photo:joi.any()
    ,
    capacity: joi.number()
    .required()
    .min(300)
    .max(15000)
    .messages({
        "any.required": "Please enter a capacity",
        "number.empty": "Please enter a capacity",
        "number.min":" Capacity must have at least three hundred letters",
        "number.max":" Capacity must have at least fifty letters",
        "number.max":"Please enter a valid capacity"
    })
    ,
    citiId:joi.string()
    .required()
    .messages({
        "any.required": "Please enter a user ID",
        "number.empty": "Please enter a user ID",
    })
    ,
    userId:joi.string() 
    .required()
    .messages({
        "any.required": "Please enter a user ID",
        "number.empty": "Please enter a user ID",
    })
})

module.exports = schema