import { Router } from "express";
import { getUser } from "../../controllers/user.controller";

const router = Router();

router.get("/user", getUser);

export default router;
