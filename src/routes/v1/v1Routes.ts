import express from 'express'
import { getUser } from '../../controllers/myFirst.controller';

const Router=express.Router();

Router.get('/user', getUser);

export default Router;


