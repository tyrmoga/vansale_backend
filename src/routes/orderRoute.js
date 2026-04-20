import { Router } from "express";
import { getOrders, getOrderById, createOrder, updateOrder, deleteOrder } from '../controllers/orderController.js';

const ordersRouter = Router();

// list odoo orders
ordersRouter.get('/orders', getOrders);

//get single order by id
  ordersRouter.get('/orders/:id', getOrderById);

// create new order
ordersRouter.post('/orders', createOrder);

// update order by id
ordersRouter.patch('/orders/:id', updateOrder);

// delete order by id
ordersRouter.delete('/orders/:id', deleteOrder);


export default ordersRouter;