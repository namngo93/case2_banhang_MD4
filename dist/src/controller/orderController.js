"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
const orderService_1 = __importDefault(require("../service/orderService"));
const categoryService_1 = __importDefault(require("../service/categoryService"));
class OrderController {
    constructor() {
        this.showFormOrder = async (req, res) => {
            let id = req.params.id;
            let products = await this.productService.findByID(id);
            let orders = await orderService_1.default.findBySTT();
            let user = req.session.User;
            res.render('listOrder', { user: user, products: products, idOrders: orders.idOrder });
        };
        this.saveCart = async (req, res) => {
            let cart = req.body;
            await this.orderService.saveOrderDetail(cart);
            res.redirect(301, '/homeUser');
        };
        this.search = async (req, res) => {
            let homes = await this.productService.findByName(req.body);
            res.render('order', { homes: homes });
        };
        this.productService = productService_1.default;
        this.orderService = orderService_1.default;
        this.categoryService = categoryService_1.default;
    }
}
exports.default = new OrderController();
//# sourceMappingURL=orderController.js.map