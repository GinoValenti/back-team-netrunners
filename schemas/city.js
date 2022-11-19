const joi = require('joi')

const schema = joi.object({
    title: joi
        .string()
        .required()
        .min(5)
        .max(20)
        .message({
            "any.required":"Title is required",
            "string.empty":"Title is required",
        }),
    continent: joi
        .string()
        .required(),
    image: joi
        .string()
        .required()
        .uri(),
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