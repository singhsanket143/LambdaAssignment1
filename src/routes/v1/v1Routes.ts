import express from "express"
import { getUser } from "../../controllers/user.controller"

const  userRouter = express.Router()
userRouter.get('/user', getUser)

export default userRouter