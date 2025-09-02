const { env } = require("../configs/env.config");
const { sendToQueue } = require("../utils/rabbitmq/rabbitmq");

const emailController = {
  sendEmail: async (req, res) => {
    try {
      await sendToQueue(req.body);

      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error sending email", error });
    }
  },
};

module.exports = emailController;
