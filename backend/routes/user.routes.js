import { Router } from "express";

import { getDetailUser } from "../controllers/user.controller.js";

const router = Router();

router.get("/user", getDetailUser);

export default router