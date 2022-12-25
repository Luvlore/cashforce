"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Provider_controller_1 = __importDefault(require("../controllers/Provider.controller"));
const providerRouter = (0, express_1.Router)();
providerRouter.get('/', Provider_controller_1.default.getAll);
exports.default = providerRouter;
