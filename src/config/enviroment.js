import dotenv from "dotenv";

dotenv.config();

const env = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT,
  clientID: process.env.client_ID,
  clientSecret: process.env.client_secret,
};

module.exports = env;
