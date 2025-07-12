import { Router } from 'express';
import { createProduct } from '../controllers/product.controller';
import { validateProductInput } from '../middlewares/product.input-validator';

const router = Router();

router.post('/api/products', validateProductInput, createProduct);


export default router;
