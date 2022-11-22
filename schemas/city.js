/* const joi = require('joi')

const schema = joi.object({
    title: joi
        .string()
        .required()
        .min(5)
        .max(20)
        .message({
            "string.empty" : "No pusiste nada nadita",
        }),
    continent: joi
        .string()
        .required(),
    image: joi
        .string()
        .required() ,
    population: joi
        .number()
        .required() ,
    userId: joi
        .string()
        .required()
        .min(24)
        .max(24) 
})

module.exports = schema */

const joi = require('joi')

const schema = joi.object({ 
    title: joi.string()
        .required()
        .min(3)
        .max(50)
        .messages({
            "any.required": `name is required}`,
            "string.empty": "name is required",
            "string.min": "name is too short",
            "string.max": "name is too large",
        }),
        continent: joi.string()
        .required()
        .min(4)
        .messages({
            'any.required': 'continent is required',
            'number.base': 'continent is required',
            'number.min': 'continent is too short',
        }),
    image: joi.string()
        .required()
        .uri()
        .messages({
            'any.required': 'image is required',
            'string.empty': 'image is required',
            'string.uri':'url is not valid'
        }),
    population: joi.number()
        .required()
        .messages({
            'any.required': 'population must be a number',
            'string.empty': 'population is required',
        }),
    userId: joi
    .string()
        .required()
        .min(24)
        .max(24) 
})

module.exports = schema