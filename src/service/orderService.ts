import {Order} from "../model/order";
import {AppDataSource} from "../data-source";
import {OrderDetail} from "../model/orderDetail";
import {Timestamp} from "typeorm";

class OrderService {
    private orderRepository;
    private orderDetailRepository;
    constructor() {
        this.orderRepository = AppDataSource.getRepository(Order);
        this.orderDetailRepository = AppDataSource.getRepository(OrderDetail)
    }

    getAll = async () => {
        let sql =`select p.id, p.name, p.price, p.image,p.description, c.idOrder, c.time, c.totallpoint  from product p join order c on p.idOrder = c.idOrder`
        let orders = await this.orderRepository.query(sql);
        return orders ;
    }

    saveOrderDetail = async (orderDetail) => {
        // console.log(orderDetail.idProduct)
        let sql = `INSERT INTO order_detail(quantity, product, order_detail.order)
                   VALUES (${orderDetail.quantity}, ${orderDetail.idProduct}, ${orderDetail.idOrder})`
        return this.orderDetailRepository.query(sql);
    }

    save = async (order) => {      // product này vẫn chưa có id
        return this.orderRepository.save(order); //khởi tạo đã có id
    }

   findBySTT = async () => {

       let orders = await this.orderRepository.findOneBy({status: 'loading'});
       if (!orders){
           return null;
       } else {
           return orders;
       }
   }

    // Tìm bằng ID
    private findByID = async (id) => {
        let order = await this.orderRepository.findOneBy({id: id});  //findOne là tìm ra một thằng
        if (!order){
            return null;
        }else {
            return order;
        }
    }

    private delete= async (id) => {
        let product = await this.orderRepository.findOneBy({id: id});  //findOne là tìm ra một thằng
        if (!product){
            return null;
        }else {
            return this.orderRepository.delete({id: id});
        }
    }
    //
    // findByName = async (search)=>{
    //     let product = await this.orderRepository.findOneBy({name: {$regex:`(.*)${search.search}(.*)`} }).populate('category')
    //     if (!product){
    //         return null;
    //     }
    //     return product;
    // }
    //
    // findByUsername= async (username)=>{
    //     let product = await this.orderRepository.findOneBy({username: username}).populate('user')
    //     if (!product){
    //         return null;
    //     }
    //     return product;
    // }

    orderLoad = async () => {
        let sql = `INSERT INTO case2_banhangorm.order (idUser, time, totallpoint, status)
                   VALUES (1, now(), 0 , 'loading');`
        return this.orderRepository.query(sql);
    }

}

export default new OrderService();