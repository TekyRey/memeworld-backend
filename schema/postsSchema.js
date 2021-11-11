const Joi = require("joi");
module.exports = {
  insertCategories: Joi.object({
    name: Joi.string().allow(null),

  }),

  updateCategories: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().allow(null),
   
  }),

  insertPosts: Joi.object({
    userId: Joi.number().required(),
    post: Joi.string().required(),
    caption: Joi.string().min(3).allow(null),
    date: Joi.date().min(3).allow(null),
    categoryId: Joi.number().required(),
    favorites: Joi.number().allow(null),
    likes: Joi.number().allow(null),
    type: Joi.string().min(3).required(),
  }),

  updatePosts: Joi.object({
    id: Joi.number().required(),
    userId: Joi.number().allow(null),
    post: Joi.string().allow(null),
    caption: Joi.string().min(3).allow(null),
    date: Joi.date().min(3).allow(null),
    categoryId: Joi.number().allow(null),
    favorites: Joi.number().allow(null),
    likes: Joi.number().allow(null),
    type: Joi.string().min(3).allow(null),
  })

};
