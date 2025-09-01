const sgMail = require("@sendgrid/mail");
const { env } = require("../../configs/env.config");

sgMail.setApiKey(env.SENDGRID_API_KEY);

const sendgridProvider = {
  send: async ({ to, subject, html, text }) => {
    const msg = {
      from: env.VERIFIED_EMAIL,
      to,
      subject,
      text,
      html,
    };

    try {
      return await sgMail.send(msg);
    } catch (error) {
      console.error("SendGrid Error:", error.response?.body || error);
    }
  },
};

module.exports = sendgridProvider;
