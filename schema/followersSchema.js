const Joi = require("joi");
module.exports = {
  insertFollowers: Joi.object({
    user_id: Joi.number().required(),
    follower_id: Joi.number().required(),
    blocked: Joi.number().allow(null),
    favorites: Joi.number().allow(null),
  }),

  
  
};
