const Joi = require("joi");
module.exports = {
  insertComments: Joi.object({
    user_id: Joi.number().required(),
    post_id: Joi.number().required(),
    comment: Joi.string().required(),
    likes: Joi.number().allow(null),
    date: Joi.date().min(3).required(),
  }),

  updateComments: Joi.object({
    id: Joi.number().required(),
    user_id: Joi.number().allow(null),
    post_id: Joi.number().allow(null),
    comment: Joi.string().allow(null),
    likes: Joi.number().allow(null),
    date: Joi.date().min(3).allow(null),
  }),

  insertCommentLikes: Joi.object({
    user_id: Joi.number().required(),
    comment_id: Joi.number().required(),
  }),
  
  updateCommentLikes: Joi.object({
    user_id: Joi.number().required(),
    comment_id: Joi.number().required(),
  }),

};
