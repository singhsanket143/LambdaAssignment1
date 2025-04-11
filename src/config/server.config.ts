import dotenv from 'dotenv';

type ServerConfig = {
    PORT: string,
    NODE_ENV: string,
    API_VERSION:string
}

function loadEnv() {
    dotenv.config();
}

loadEnv();

export const config: ServerConfig = {
    PORT: process.env.PORT || "3000" ,
    NODE_ENV: process.env.NODE_ENV || "developement",
    API_VERSION: process.env.API_VERSION || "v1"
};