import { Router } from "express";

import { getObat } from "../controllers/obat.controller.js";

const router = Router();

router.get("/obat", getObat);

export default router