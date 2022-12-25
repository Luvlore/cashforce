import { Request, Response } from 'express';
import { Order } from '../database/models/Order';

const OrderController = {
  getAll: async (_req: Request, res: Response) => {
    const orders = await Order.findAll();
    
    return res.status(200).json(orders);
  },
};

export default OrderController;