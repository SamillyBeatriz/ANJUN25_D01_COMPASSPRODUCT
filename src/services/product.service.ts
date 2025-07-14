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

const findById = async (id: number) => {
  return productRepository.findById(id);
};

const findAll = async ({ skip, take }: { skip: number; take: number }) => {
  return productRepository.findAll({ skip, take });
};

const count = async () => {
  return productRepository.count();
};

export default {
  create,
  findById,
  findAll,
  count,
};
