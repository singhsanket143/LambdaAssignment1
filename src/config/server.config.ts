import dotenv from 'dotenv';

 function loadEnv() {
    dotenv.config();
}

 loadEnv();

export const config={
    PORT: (process.env.PORT) || "3000",
    API_VERSION: process.env.API_VERSION || 'v1',
    NODE_ENV: process.env.NODE_ENV || 'development',
}