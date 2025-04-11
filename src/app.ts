import express from 'express';
import { config } from './config/server.config';
import v1Routes from '../src/routes/v1/v1Routes.ts';

/**
 * DONOT DELETE THE BELOW app INSTANCE CREATION LINE i.e. const app = express();
 */
const app = express();


app.use(express.json());


app.use(`/api/${config.API_VERSION}`, v1Routes);


/**
 * DONOT DELETE THE BELOW EXPORT STATEMENT
 */
export default app;
