import { Request, Response } from 'express';
import { Buyer } from '../database/models/Buyer';
import { Cnpj } from '../database/models/Cnpj';
import { Order } from '../database/models/Order';
import { Provider } from '../database/models/Provider';

const OrderController = {
  getAll: async (_req: Request, res: Response) => {
    const orders = await Order.findAll({
      attributes: ['nNf', 'value', 'emissionDate', 'orderStatusBuyer'],
      include: [
        { 
          model: Buyer, 
          as: 'buyers', 
          attributes: ['name'],
        },
        { 
          model: Provider, 
          as: 'providers', 
          attributes: [
            'name',
            'tradingName',
            'responsibleName',
            'responsiblePosition',
            'responsiblePhone',
            'responsibleMobile',
            'website',
            'postalCode',
            'address',
            'number',
            'complement',
            'neighborhood',
            'city',
            'state',
            'bank',
            'bankAgency',
            'account',
            'email'
          ],
          include: [
            {
              model: Cnpj,
              as: 'cnpjs',
              attributes: ['cnpj']
            }]
        },
      ]
    });
    
    return res.status(200).json(orders);
  },
};

export default OrderController;