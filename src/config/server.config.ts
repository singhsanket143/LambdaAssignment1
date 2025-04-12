import dotenv from 'dotenv'

function loadEnvVariables() {
    dotenv.config()
}

loadEnvVariables();

type configType = {
    PORT: string;
    API_VERSION: string;
    NODE_ENV: string
}

export const config: configType = {
    PORT: process.env.PORT || "3000",
    API_VERSION: process.env.API_VERSION || "v1",
    NODE_ENV: process.env.NODE_ENV || "Development",
}