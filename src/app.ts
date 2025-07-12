import express, { Application } from 'express';
import cors from 'cors';

import productRoutes from './routes/product.routes'

const app: Application = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use(productRoutes);

export default app;
