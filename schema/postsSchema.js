const Joi = require("joi");
module.exports = {
  insertCategories: Joi.object({
    name: Joi.string().allow(null),

  }),

  updateCategories: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().allow(null),
   
  }),

};
