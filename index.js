require("dotenv").config();
const express = require("express");
const { env } = require("./src/configs/env.config");
const emailRouter = require("./src/routes/email.route");

const app = express();

app.use(express.json());

app.use("/v1/emails", emailRouter);

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
