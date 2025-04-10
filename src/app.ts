import express from 'express';
import {config} from './config/server.config'
import userRouter from './routes/v1/v1Routes';
/**
 * DONOT DELETE THE BELOW app INSTANCE CREATION LINE i.e. const app = express();
 */
const app = express();
const baseRoute = `/api/${config.API_VERSION}`
app.use(baseRoute, userRouter)

/**
 * DONOT DELETE THE BELOW EXPORT STATEMENT
 */
export default app;
