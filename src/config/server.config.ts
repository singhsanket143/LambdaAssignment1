import dotenv from 'dotenv';

type Config ={
    PORT:String,
    NODE_ENV:number,
    API_VERSION:String
} 

function loadEnv(){
    dotenv.config();
}

loadEnv();
export const config:Config={
    PORT:String(process.env.PORT),
    NODE_ENV: Number(process.env.NODE_ENV),
    API_VERSION:String(process.env.API_VERSION)
}

