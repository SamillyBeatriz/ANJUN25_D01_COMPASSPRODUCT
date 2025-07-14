import { Request, Response } from 'express';
import productService from '../services/product.service';
import { DuplicateProductError } from '../exceptions/product.duplicate-exception';
import { sendError, sendSuccess } from '../utils/response';
import { getPagination } from '../utils/pagination';

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

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const numericId = Number(id);

  if (!numericId || isNaN(numericId) || numericId <= 0) {
    sendError(res, 400, 'Invalid product ID');
  }

  try {
    const product = await productService.findById(numericId);

    if (!product) {
      sendError(res, 404, 'Product not found');
    }

    sendSuccess(res, 200, product);
  } catch (error) {
    console.error('Error while fetching product:', error);
    sendError(res, 500, 'Failed to fetch product');
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  const { page, limit, skip } = getPagination(req.query, 5);

  try {
    const [products, count] = await Promise.all([
      productService.findAll({ skip, take: limit }),
      productService.count(),
    ]);

    const totalPages = Math.ceil(count / limit);

    sendSuccess(res, 200, { page, total: totalPages, count, data: products });
  } catch (error) {
    console.error('Error while fetching all products: ', error);
    sendError(res, 500, 'Failed to fetch products');
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name, description, price, quantity } = req.body;

  if (!id || isNaN(id) || id <= 0) {
    sendError(res, 400, 'Invalid product ID');
    return;
  }

  try {
    const existingProduct = await productService.findById(id);
    if (!existingProduct) {
      sendError(res, 404, 'Product not found');
      return;
    }

    if (name && name !== existingProduct.name) {
      const productWithSameName = await productService.findByName(name);
      if (productWithSameName) {
        sendError(res, 409, 'name already registered');
      }
    }

    await productService.update(id, { name, description, price, quantity });
    res.status(204).send();
  } catch (error) {
    console.error('Error while updating product:', error);
    sendError(res, 500, 'Failed to update product');
  }
};
