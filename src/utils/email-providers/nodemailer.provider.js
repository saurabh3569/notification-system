const nodemailer = require("nodemailer");
const { env } = require("../../configs/env.config");

const nodemailerProvider = {
  send: async ({ to, subject, html }) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: env.NODE_MAILER_GMAIL,
        pass: env.NODE_MAILER_PASS,
      },
    });

    try {
      return await transporter.sendMail({
        from: env.NODE_MAILER_GMAIL,
        to,
        subject,
        html,
      });
    } catch (error) {
      console.error("Nodemailer Error:", error);
    }
  },
};

module.exports = nodemailerProvider;
