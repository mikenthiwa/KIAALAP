import dotenv from 'dotenv';

dotenv.config();

const env = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT
};

module.exports = env;
