import express from "express";
import { json } from "express";
import { config } from "./config/server.config";
import v1Routes from "./routes/v1/v1Routes";

/**
 * DONOT DELETE THE BELOW app INSTANCE CREATION LINE i.e. const app = express();
 */
const app = express();

app.use(json());

app.use(`/api/${config.API_VERSION}`, v1Routes);

/**
 * DONOT DELETE THE BELOW EXPORT STATEMENT
 */
export default app;
