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
            "string.min":"Title is too short",
            "string.max":"Title is too large"
        }),
    continent: joi
        .string()
        .required()
        .message({
            "any.required":"Continent is required",
            "string.empty":"Continent is required",
        }),
    image: joi
        .string()
        .required()
        .uri()
        .message({
            "any.required":"image is required",
            "string.uri":"Valid image url is required"
        }),
    population: joi
        .number()
        .required()
        .message({
            "any.required":"Population is required",
            "string.empty":"Population is required",
        }),
    userId: joi
        .string()
        .required()
        .min(24)
        .max(24)
        .message({
            "any.required":"Valid userId i"
        })
})

module.exports = schema