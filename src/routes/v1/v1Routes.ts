
import express from 'express';
import { getUser } from '../../controllers/user.controller';

const v1router = express.Router();

v1router.get('/user',getUser);

export {v1router};