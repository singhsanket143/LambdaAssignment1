import express from 'express';
import { userController } from '../../controllers/user.controller';
const router = express.Router();

router.get('/', userController);

export default router;
