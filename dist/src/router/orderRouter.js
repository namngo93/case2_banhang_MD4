"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const orderController_1 = __importDefault(require("../controller/orderController"));
exports.orderRouter = (0, express_1.Router)();
exports.orderRouter.get('/listOrder/:id', orderController_1.default.showFormOrder);
exports.orderRouter.post('/cart/', orderController_1.default.saveCart);
//# sourceMappingURL=orderRouter.js.map