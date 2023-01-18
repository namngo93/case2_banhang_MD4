declare class OrderService {
    private orderRepository;
    private orderDetailRepository;
    constructor();
    getAll: () => Promise<any>;
    saveOrderDetail: (orderDetail: any) => Promise<any>;
    save: (order: any) => Promise<any>;
    findBySTT: () => Promise<any>;
    private findByID;
    private delete;
    orderLoad: () => Promise<any>;
}
declare const _default: OrderService;
export default _default;
