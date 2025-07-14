import * as productRepository from '../repositories/product.repository';
import { DuplicateProductError } from '../exceptions/product.duplicate-exception';
import { CreateProductInput, UpdateProductInput } from '../dtos/product.dtos';

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

const update = async (id: number, data: UpdateProductInput) => {
  return await productRepository.updateProduct(id, data);
};

const findByName = async (name: string) => {
  return await productRepository.findByName(name);
};

const deleteById = async (id: number): Promise<void> => {
  const product = await productRepository.findById(id);
  if (!product) {
    throw new Error('product not found');
  }
  await productRepository.deleteById(id);
};

export default {
  create,
  findById,
  findByName,
  findAll,
  count,
  update,
  deleteById
};
