import express from 'express';
import userRoutes from './routes/v1/user.routes';
import v1Routes from './routes/v1/v1Routes.routes';
/**
 * DONOT DELETE THE BELOW app INSTANCE CREATION LINE i.e. const app = express();
 */
const app = express();

app.use('/api/v1/user', userRoutes);
app.use('/api/v1', v1Routes);

/**
 * DONOT DELETE THE BELOW EXPORT STATEMENT
 */
export default app;
