const Joi = require("joi");
module.exports = {
  insertMessages: Joi.object({
    user_id: Joi.number().required(),
    sender_id: Joi.number().required(),
    receiver_id: Joi.number().required(),
    message: Joi.string().required(),
    date: Joi.date().required(),
    privacy: Joi.string().required(),
  }),

  updateFollowers: Joi.object({
    user_id: Joi.number().required(),
    follower_id: Joi.number().allow(null),
    blocked: Joi.number().allow(null),
    favorites: Joi.number().allow(null),
  }),

  
};
