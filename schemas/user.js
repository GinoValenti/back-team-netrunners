const joi = require('joi')

const schema = joi.object({
    name: joi.string()
        .required()
        .min(3)
        .max(50)
        .messages({
            'any.required': 'name is required',
            'string.empty': 'name is required',
            'string.min': 'name is too short',
            'string.max': 'name is too large',
        }),
    lastname: joi.string()
        .required()
        .min(3)
        .max(50)
        .messages({
            'any.required': 'lastname is required',
            'string.empty': 'lastname is required',
            'string.min': 'lastname is too short',
            'string.max': 'lastname is too large',
        }),
    age: joi.number()
        .required()
        .min(18)
        .messages({
            'any.required': 'age is required',
            'number.base': 'age is required',
            'number.min': 'age must be over 18',
        }),
    photo: joi.string()
        .required()
        .uri()
        .messages({
            'any.required': 'image is required sorry',
            'string.empty': 'image is required sorry',
            'string.uri':'image must have a valid url'
        }),
    email: joi.string()
        .required()
        .email({minDomainSegments: 2})
        .messages({
            'any.required': 'email is required',
            'string.empty': 'email is required',
            'string.email': 'must be a valid email'
        }),
    password: joi.string()
    .required()
    .min(10)
    .messages({
        'any.required' : 'password is required',
        'string.empty' : 'password is required',
        'string.min' : 'password is too short'
    })
})

module.exports = schema