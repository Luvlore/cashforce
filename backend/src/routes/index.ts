import { Router } from "express";
import orderRouter from "./Order.routes";

const router = Router();

router.use('/orders', orderRouter);

export default router;