const joi = require('joi')

const schema = joi.object({
    name: joi.string()
        .required()
        .messages({
            "any.required" : 'name is required',
            "string.empty" : 'name is required'
        }),
    icon: joi.string()
        .required()
        .uri()
        .messages({
            'any.required' :'icon is required',
            'string.empty' :'image is required',
            'string.uri': 'url is not valid'
        })
})

module.exports = schema