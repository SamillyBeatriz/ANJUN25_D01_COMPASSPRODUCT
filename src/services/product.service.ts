import * as productRepository from '../repositories/product.repository';
import { DuplicateProductError } from '../exceptions/product.duplicate-exception';
import { CreateProductInput } from '../dtos/product.dtos';

const create = async (data: CreateProductInput) => {
  const existingProduct = await productRepository.findByName(data.name);
  if (existingProduct) {
    throw new DuplicateProductError();
  }
  return productRepository.createProduct(data);
};

export default {
  create
}


