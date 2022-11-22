const joi = require('joi')

const schema = joi.object({
    title: joi
        .string()
        .required()
        .min(5)
        .max(20),
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

module.exports = schema