import express from 'express';
import v1Router from './routes/v1/v1Routes';
import { config } from './config/server.config';

/**
 * DONOT DELETE THE BELOW app INSTANCE CREATION LINE i.e. const app = express();
 */
const app = express();
app.use(`/api/${config.API_VERSION}`, v1Router)

/**
 * DONOT DELETE THE BELOW EXPORT STATEMENT
 */
export default app;
