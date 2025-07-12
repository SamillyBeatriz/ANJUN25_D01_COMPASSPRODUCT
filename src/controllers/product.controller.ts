import { Request, Response } from 'express';
import productService from '../services/product.service';
import { DuplicateProductError } from '../exceptions/product.duplicate-exception';
import { sendError} from '../utils/response';


export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price, quantity } = req.body;

  try {
    const createdProduct = await productService.create({
      name,
      description,
      price,
      quantity,
    });
    res.status(201).json(createdProduct);
  } catch (error) {
    if (error instanceof DuplicateProductError) {
      res.status(409).json({ error: error.message });
    }

    console.error('Error while creating product:', error);
    sendError(res, 500, 'Failed to register product');
  }
};

