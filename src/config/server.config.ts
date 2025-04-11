import "dotenv/config";

type EnvConfig = {
	PORT?: string;
	API_VERSION?: string;
	NODE_ENV?: string;
};

export const config: EnvConfig = {
	PORT: process.env.PORT,
	API_VERSION: process.env.API_VERSION,
	NODE_ENV: process.env.NODE_ENV,
};
