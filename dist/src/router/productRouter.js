"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get('/create', productController_1.default.showFormCreate);
exports.productRouter.post('/create', productController_1.default.create);
exports.productRouter.get('/edit/:id', productController_1.default.showFormEdit);
exports.productRouter.post('/edit/:id', productController_1.default.update);
exports.productRouter.get('/delete/:id', productController_1.default.showFormDelete);
exports.productRouter.get('/deleteHome/:id', productController_1.default.delete);
//# sourceMappingURL=productRouter.js.map