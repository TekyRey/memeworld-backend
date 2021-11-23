const Joi = require("joi");
module.exports = {
    insertNotifications: Joi.object({
    user_id: Joi.number().required(),
    notification: Joi.string().required(),
    date: Joi.date().required(),
    type: Joi.string().required(),
  }),

    updateNotifications: Joi.object({
    id: Joi.number().required(),
    user_id: Joi.number().optional(),
    notification: Joi.string().optional(),
    date: Joi.date().optional(),
    type: Joi.string().optional(),
  }),

  
};
