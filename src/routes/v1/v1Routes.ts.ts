import express from 'express';
import UserRouter from './user.router';

const router = express.Router();

router.use('/user', UserRouter); // => /api/v1/user

export default router;
