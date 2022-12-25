import { Router } from "express";
import orderRouter from "./Order.routes";
import providerRouter from "./Provider.routes";

const router = Router();

router.use('/orders', orderRouter);
router.use('/providers', providerRouter);

export default router;