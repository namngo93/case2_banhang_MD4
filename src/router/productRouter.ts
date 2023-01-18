import {Router} from "express";
import homeController from "../controller/productController";
import {router} from "./router";
import multer from 'multer'

export const productRouter = Router();
productRouter.get('/create', homeController.showFormCreate);
productRouter.post('/create' , homeController.create);
productRouter.get('/edit/:id' , homeController.showFormEdit);
productRouter.post('/edit/:id' , homeController.update );
productRouter.get('/delete/:id' , homeController.showFormDelete);
productRouter.get('/deleteHome/:id' , homeController.delete);
