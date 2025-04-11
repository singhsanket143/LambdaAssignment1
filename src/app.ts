import express from "express";
import bodyParser from "body-parser";
import v1Router from "./routes/v1/v1Routes";
import { config } from "./config/server.config";
/**
 * DONOT DELETE THE BELOW app INSTANCE CREATION LINE i.e. const app = express();
 */
const app = express();
app.use(bodyParser.json());

app.use("/api/v1", v1Router);

app.use(`/api/${config.API_VERSION}`, v1Router);

// Do not touch this line
export { app };

/**
 * DONOT DELETE THE BELOW EXPORT STATEMENT
 */
export default app;
