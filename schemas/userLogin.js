const joi = require('joi')

const schema = joi.object({
    email: joi.string()
        .required()
        .min(3)
        .max(50)
        .messages({
            'any.required': 'EMAIL_REQUIRED',
            'string.empty': 'EMAIL_REQUIRED',
            'string.min': 'EMAIL_TOO_SHORT',
            'string.max': 'EMAIL_TOO_LARGE',
        }),
    password: joi.string()
        .required()
        .min(10)
        .messages({
            'any.required': 'PASSWORD_REQUIRED',
            'number.base': 'PASSWORD_REQUIRED',
            'number.min': 'INVALID_PASSWORD',
        }),
})

module.exports = schema