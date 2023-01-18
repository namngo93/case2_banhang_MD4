import {Router} from "express";
import orderController from "../controller/orderController";


export const orderRouter = Router();
// productRouter.get('/create', homeController.showFormCreate);
// productRouter.post('/create' , homeController.create);
orderRouter.get('/listOrder/:id' , orderController.showFormOrder);
orderRouter.post('/cart/' , orderController.saveCart);
