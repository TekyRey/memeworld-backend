const Joi = require("joi");
module.exports = {
  insertMessages: Joi.object({
    sender_id: Joi.number().required(),
    receiver_id: Joi.number().required(),
    message: Joi.string().required(),
    date: Joi.date().required(),
    privacy: Joi.string().required(),
  }),

  updateMessages: Joi.object({
    id: Joi.number().required(),
    sender_id: Joi.number().allow(null),
    receiver_id: Joi.number().allow(null),
    message: Joi.string().allow(null),
    date: Joi.date().allow(null),
    privacy: Joi.string().allow(null),
  }),

  
};
