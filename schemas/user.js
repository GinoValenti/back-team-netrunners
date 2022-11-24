const joi = require('joi')

const schema = joi.object({
    name: joi.string()
        .required()
        .min(3)
        .max(50)
        .messages({
            'any.required': 'NAME_REQUIRED',
            'string.empty': 'NAME_REQUIRED',
            'string.min': 'NAME_TOO_SHORT',
            'string.max': 'NAME_TOO_LARGE',
        }),
    lastname: joi.string()
        .required()
        .min(3)
        .max(50)
        .messages({
            'any.required': 'LASTNAME_REQUIRED',
            'string.empty': 'LASTNAME_REQUIRED',
            'string.min': 'LASTNAME_TOO_SHORT',
            'string.max': 'LASTNAME_TOO_LARGE',
        }),
    age: joi.number()
        .required()
        .min(18)
        .messages({
            'any.required': 'AGE_REQUIRED',
            'number.base': 'AGE_REQUIRED',
            'number.min': 'INVALID_AGE',
        }),
    photo: joi.string()
        .required()
        .uri()
        .messages({
            'any.required': 'IMG_REQUIRED',
            'string.empty': 'IMG_REQUIRED',
            'string.uri':'INVALID_URL'
        }),
    email: joi.string()
        .required()
        .email({minDomainSegments: 2})
        .messages({
            'any.required': 'MAIL_REQUIRED',
            'string.empty': 'MAIL_REQUIRED',
            'string.email': 'INVALID_MAIL'
        }),
    password: joi.string().required(),
})

module.exports = schema