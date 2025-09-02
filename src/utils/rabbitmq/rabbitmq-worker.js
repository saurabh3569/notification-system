const nodemailerProvider = require("../email-providers/nodemailer.provider");
const sendgridProvider = require("../email-providers/sendgrid.provider");
const { connectQueue, consumeQueue } = require("./rabbitmq");

const startConsumer = async () => {
  await connectQueue();
  console.log(1);

  consumeQueue(async (data) => {
    try {
      switch (data.provider) {
        case "sendgrid":
          await sendgridProvider.send(data);
          break;
        case "nodemailer":
          await nodemailerProvider.send(data);
          break;
      }
    } catch (error) {
      console.error("Failed to process email:", error);
    }
  });
};

module.exports = startConsumer;
