import {Router} from "express";
import homeController from "../controller/productController";
import {productRouter} from "./productRouter";
import {userRouter} from "./userRouter";
import {orderRouter} from "./orderRouter";

export const router = Router();
router.get('/home', homeController.showHome)
router.get('/homeUser', homeController.showHomeUser)
// router.get('/thue/:idHome/:username', homeController.showMyHome)
router.post('/home', homeController.search)
router.post('/homeUser', homeController.searchUser)
router.use('/homes', productRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);


