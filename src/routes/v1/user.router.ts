import express from "express";
import { getUser } from "../../controllers/user.controller";

const UserRouter = express.Router();

UserRouter.get('/', getUser);

export default UserRouter