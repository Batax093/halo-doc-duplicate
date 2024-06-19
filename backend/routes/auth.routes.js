import { Router } from "express";

import { login, signup, logout } from "../controllers/auth.controller.js";

const router = Router();

router.post("/auth/login", login);
router.post("/auth/signup", signup);
router.post("/auth/logout", logout);

export default router