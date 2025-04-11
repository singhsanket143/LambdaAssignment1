import { Router } from "express";
import { userGETController } from "../../controllers/user.controller";

const router = Router();
router.get("/user", userGETController);
export default router;