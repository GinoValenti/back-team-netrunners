const joi = require('joi')

const schema = joi.object({
    title: joi.string().required() ,
    continent: joi.string().required(),
    image: joi.string().required() ,
    population: joi.number().required() ,
    userId: joi.any().required() 
})