const Joi = require("joi");
module.exports = {
  insertSchema: Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
      })
      .required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    first_name: Joi.string().min(3).allow(null),
    last_name: Joi.string().min(3).allow(null),
    about_you: Joi.string().min(3).allow(null),
    website_url: Joi.string().min(3).allow(null),
    facebook_url: Joi.string().min(3).allow(null),
    google_plus_url: Joi.string().min(3).allow(null),
    twitter_url: Joi.string().min(3).allow(null),
    profile_pic: Joi.string().min(3).allow(null),
    privacy: Joi.string().min(3).allow(null),
    referal_id: Joi.number().min(3).allow(null),
    paid_referals: Joi.number().min(3).allow(null),
    verified: Joi.number().min(3).allow(null),
    photo: Joi.string().optional().allow(null),
    permission_level: Joi.string().optional(),
  }),

  updateSchema: Joi.object({
    id: Joi.number().required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
      })
      .allow(null),
    username: Joi.string().allow(null),
    password: Joi.string().allow(null),
    first_name: Joi.string().min(3).allow(null),
    last_name: Joi.string().min(3).allow(null),
    about_you: Joi.string().min(3).allow(null),
    website_url: Joi.string().min(3).allow(null),
    facebook_url: Joi.string().min(3).allow(null),
    google_plus_url: Joi.string().min(3).allow(null),
    twitter_url: Joi.string().min(3).allow(null),
    profile_pic: Joi.string().min(3).allow(null),
    privacy: Joi.string().min(3).allow(null),
    referal_id: Joi.number().min(3).allow(null),
    paid_referals: Joi.number().min(3).allow(null),
    verified: Joi.number().min(3).allow(null),
    photo: Joi.string().optional().allow(null),
    permission_level: Joi.string().optional(),
  }),

};
