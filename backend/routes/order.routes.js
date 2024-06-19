import { Router } from "express";

import { addOrderObat, addOrderPeralatan } from "../controllers/order.controller.js";

const router = Router();

router.post("/order/obat", addOrderObat);
router.post("/order/peralatan", addOrderPeralatan);

export default router
