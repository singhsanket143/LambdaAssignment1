import express from 'express';
import Router from './routes/v1/v1Routes';

/**
 * DONOT DELETE THE BELOW app INSTANCE CREATION LINE i.e. const app = express();
 */
const app = express();

app.use('/api/v1',Router);
/**
 * DONOT DELETE THE BELOW EXPORT STATEMENT
 */
export default app;
