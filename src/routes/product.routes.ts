import { Router } from 'express';
import { createProduct, getAllProducts, getProductById } from '../controllers/product.controller';
import { validateProductInput } from '../middlewares/product.input-validator';

const router = Router();

router.get('/api/products', getAllProducts);
router.post('/api/products', validateProductInput, createProduct);
router.get('/api/products/:id', getProductById);

export default router;
