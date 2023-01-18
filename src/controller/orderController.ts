import {Request, Response} from "express";
import productService from "../service/productService";
import orderService from "../service/orderService";
import categoryService from "../service/categoryService";




class OrderController {
    private productService;
    private orderService;
    private categoryService;
    private userService;
    constructor() {
        this.productService = productService;
        this.orderService = orderService;
        this.categoryService = categoryService;

    }

    showFormOrder = async (req: Request, res: Response) => {
        let id = req.params.id;
        let products = await this.productService.findByID(id);
        let orders = await orderService.findBySTT();
        // console.log(orders)
        // @ts-ignore
        let user = req.session.User;

        res.render('listOrder', {user: user, products: products, idOrders: orders.idOrder})
    }

    saveCart = async (req: Request, res: Response) => {
        let cart = req.body;
        await this.orderService.saveOrderDetail(cart);
        res.redirect(301, '/homeUser');
    }


    search = async (req: Request, res: Response) => {
        let homes = await this.productService.findByName(req.body);
        res.render('order', {homes: homes})
    }


}

    export default new OrderController();