import dotenv from 'dotenv';
dotenv.config();

export const config = {
  PORT: process.env.PORT,
  API_VERSION: process.env.API_VERSION,
  NODE_ENV: process.env.NODE_ENV
};
