import express from 'express';
import { config } from './config/server.config';
import appRouter from './routes/v1/v1Routes';



/**
 * DONOT DELETE THE BELOW app INSTANCE CREATION LINE i.e. const app = express();
 */
const app = express();

app.use(`/api/${config.API_VERSION}`,appRouter)

/**
 * DONOT DELETE THE BELOW EXPORT STATEMENT
 */
export default app;
