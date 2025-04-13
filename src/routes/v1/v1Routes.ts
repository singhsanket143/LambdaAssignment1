import  express, { Router }  from "express";
import { getUser } from "../../controllers/index.controller";


const appRouter = Router();

appRouter.use('/user',getUser)

export default appRouter;