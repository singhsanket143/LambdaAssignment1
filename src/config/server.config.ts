import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  API_VERSION: process.env.API_VERSION,
};
