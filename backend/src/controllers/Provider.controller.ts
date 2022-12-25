import { Request, Response } from 'express';
import { Provider } from '../database/models/Provider';

const ProviderController = {
  getAll: async (_req: Request, res: Response) => {
    const providers = await Provider.findAll();
    
    return res.status(200).json(providers);
  },
};

export default ProviderController;