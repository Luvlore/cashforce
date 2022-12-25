import { Router } from "express";
import OrderController from "../controllers/Order.controller";

const orderRouter = Router();

orderRouter.get('/', OrderController.getAll);

export default orderRouter;