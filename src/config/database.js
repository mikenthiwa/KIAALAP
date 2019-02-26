import env from "./enviroment";

const defaultConfig = {
  databaseUrl: env.DATABASE_URL,
  dialect: env.DATABASE_DIALECT,
  use_env_variable: "DATABASE_URL"
};

module.exports = {
  development: defaultConfig,
  test: defaultConfig,
  staging: defaultConfig,
  production: defaultConfig,
};
