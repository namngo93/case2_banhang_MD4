import { Request, Response } from "express";
declare class OrderController {
    private productService;
    private orderService;
    private categoryService;
    private userService;
    constructor();
    showFormOrder: (req: Request, res: Response) => Promise<void>;
    saveCart: (req: Request, res: Response) => Promise<void>;
    search: (req: Request, res: Response) => Promise<void>;
}
declare const _default: OrderController;
export default _default;
