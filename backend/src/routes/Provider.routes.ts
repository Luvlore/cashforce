import { Router } from "express";
import ProviderController from "../controllers/Provider.controller";

const providerRouter = Router();

providerRouter.get('/', ProviderController.getAll);

export default providerRouter;