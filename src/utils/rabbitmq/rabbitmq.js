require("dotenv").config();
const amqplib = require("amqplib");
const { env } = require("../../configs/env.config");

let channel;
let connection;
const queue = env.RABBITMQ_EMAIL_QUEUE;

const connectQueue = async () => {
  try {
    connection = await amqplib.connect(env.RABBITMQ_URL);
    channel = await connection.createChannel();
    await channel.assertQueue(queue);

    console.log("RabbitMQ Connected and Channel Ready");
    return channel;
  } catch (error) {
    console.error("RabbitMQ connection error:", error);
  }
};

const sendToQueue = async (data) => {
  if (!channel) {
    console.log("RabbitMQ channel not initialized.");
    return;
  }
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
};

const consumeQueue = (callback) => {
  if (!channel) {
    console.log("RabbitMQ channel not initialized.");
    return;
  }

  channel.consume(queue, async (msg) => {
    if (!msg) return;

    try {
      const content = JSON.parse(msg.content.toString());
      await callback(content);
      channel.ack(msg);
    } catch (error) {
      console.error("Error processing message:", error);
      channel.nack(msg, false, true); // Requeue the message if failed
    }
  });
};

module.exports = { connectQueue, sendToQueue, consumeQueue };
