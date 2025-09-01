require("dotenv").config();
const { cleanEnv, str, port } = require("envalid");

const env = cleanEnv(process.env, {
  PORT: port({ default: 5000 }),
  SENDGRID_API_KEY: str({ default: "" }),
  VERIFIED_EMAIL: str({ default: "" }),
  NODE_MAILER_GMAIL: str({ default: "" }),
  NODE_MAILER_PASS: str({ default: "" }),
});

module.exports = { env };
