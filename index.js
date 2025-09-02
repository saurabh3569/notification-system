require("dotenv").config();
const express = require("express");
const { env } = require("./src/configs/env.config");
const emailRouter = require("./src/routes/email.route");
const startConsumer = require("./src/utils/rabbitmq/rabbitmq-worker");

const app = express();

app.use(express.json());

app.use("/v1/emails", emailRouter);

app.listen(env.PORT, async () => {
  await startConsumer();
  console.log(`Server is running on port ${env.PORT}`);
});
