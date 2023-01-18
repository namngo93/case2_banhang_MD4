"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../model/order");
const data_source_1 = require("../data-source");
const orderDetail_1 = require("../model/orderDetail");
class OrderService {
    constructor() {
        this.getAll = async () => {
            let sql = `select p.id, p.name, p.price, p.image,p.description, c.idOrder, c.time, c.totallpoint  from product p join order c on p.idOrder = c.idOrder`;
            let orders = await this.orderRepository.query(sql);
            return orders;
        };
        this.saveOrderDetail = async (orderDetail) => {
            let sql = `INSERT INTO order_detail(quantity, product, order_detail.order)
                   VALUES (${orderDetail.quantity}, ${orderDetail.idProduct}, ${orderDetail.idOrder})`;
            return this.orderDetailRepository.query(sql);
        };
        this.save = async (order) => {
            return this.orderRepository.save(order);
        };
        this.findBySTT = async () => {
            let orders = await this.orderRepository.findOneBy({ status: 'loading' });
            if (!orders) {
                return null;
            }
            else {
                return orders;
            }
        };
        this.findByID = async (id) => {
            let order = await this.orderRepository.findOneBy({ id: id });
            if (!order) {
                return null;
            }
            else {
                return order;
            }
        };
        this.delete = async (id) => {
            let product = await this.orderRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            else {
                return this.orderRepository.delete({ id: id });
            }
        };
        this.orderLoad = async () => {
            let sql = `INSERT INTO case2_banhangorm.order (idUser, time, totallpoint, status)
                   VALUES (1, now(), 0 , 'loading');`;
            return this.orderRepository.query(sql);
        };
        this.orderRepository = data_source_1.AppDataSource.getRepository(order_1.Order);
        this.orderDetailRepository = data_source_1.AppDataSource.getRepository(orderDetail_1.OrderDetail);
    }
}
exports.default = new OrderService();
//# sourceMappingURL=orderService.js.map