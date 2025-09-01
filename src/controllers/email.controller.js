const emailService = require("../services/email.service");

const emailController = {
  sendEmail: async (req, res) => {
    try {
      const response = await emailService.sendEmail(req.body);

      return res
        .status(200)
        .json({ message: "Email sent successfully", response });
    } catch (error) {
      return res.status(500).json({ message: "Error sending email", error });
    }
  },
};

module.exports = emailController;
