import { Router } from 'express';
import { createProduct, getProductById } from '../controllers/product.controller';
import { validateProductInput } from '../middlewares/product.input-validator';

const router = Router();

router.post('/api/products', validateProductInput, createProduct);
router.get('/api/products/:id', getProductById);

export default router;
