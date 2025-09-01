const express = require("express");
const emailController = require("../controllers/email.controller");
const validate = require("../middlewares/validate.middleware");
const emailValidation = require("../validation/email.validation");
const emailRouter = express.Router();

emailRouter.post(
  "/",
  validate(emailValidation.send),
  emailController.sendEmail
);

module.exports = emailRouter;
