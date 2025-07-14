import { Router } from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct } from '../controllers/product.controller';
import { validateProductInput } from '../middlewares/product.input-validator';

const router = Router();

router.get('/api/products', getAllProducts);
router.post('/api/products', validateProductInput, createProduct);
router.get('/api/products/:id', getProductById);
router.patch('/api/products/:id', validateProductInput, updateProduct);

export default router;
