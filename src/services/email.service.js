const nodemailerProvider = require("../utils/email-providers/nodemailer.provider");
const sendgridProvider = require("../utils/email-providers/sendgrid.provider");

const emailService = {
  sendEmail: (data) => {
    switch (data.provider) {
      case "sendgrid":
        return sendgridProvider.send(data);
      case "nodemailer":
        return nodemailerProvider.send(data);
    }
  },
};

module.exports = emailService;
