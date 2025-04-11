import express from 'express';
import v1Routes from "./routes/v1/v1Routes";
import { config } from "./config/server.config";
/**
 * DONOT DELETE THE BELOW app INSTANCE CREATION LINE i.e. const app = express();
 */
const app = express();

app.use(express.json());

app.use(`/api/${config.API_VERSION}`, v1Routes); // ensure `/api/v1`

/**
 * DONOT DELETE THE BELOW EXPORT STATEMENT
 */
export default app;
