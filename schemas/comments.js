const joi = require("joi");


const schema = joi.object({
    photo:joi.any(),
  userId:joi.any(),
  showId:joi.any(),
  date:joi.any()
  .messages({
    "any.required": "The date is required",
  }),
  comment:joi.string()
  .required()
  .min(3)
  .max(100)
  .messages({
    "any.required": "Enter a commentary",
    "string.empty": "You can`t send a empty comment",
    "string.base": "Enter a commentary please",
    "string.min": "You have to enter at least 3 characters",
    "string.max": "the limit is 100 characters",
  }),

});

module.exports = schema;