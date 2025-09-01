const Joi = require("joi");

const emailValidation = {
  send: Joi.object({
    to: Joi.string().email().required(),
    subject: Joi.string().min(1).required(),
    html: Joi.string().required(),
    provider: Joi.string().valid("sendgrid", "nodemailer").required(),
  }),
};

module.exports = emailValidation;
