import dotenv from "dotenv";

function loadEnv() {
  dotenv.config();
}

loadEnv();

export const config = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  API_VERSION: process.env.API_VERSION,
};
