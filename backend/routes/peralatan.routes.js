import { Router } from "express";

import { getPeralatan } from "../controllers/peralatan.controller.js";

const router = Router();

router.get("/peralatan", getPeralatan);

export default router