import dotenv from "dotenv"

type Config = {
    PORT :string;
    API_VERSION:string;
    NODE_ENV:string
}

function loadEnv(){
    dotenv.config();
}

loadEnv();

export const  config:Config={
    PORT:process.env.PORT||'3000',
    API_VERSION: process.env.API_VERSION||'v1',
    NODE_ENV:process.env.NODE_ENV||'dev'
}