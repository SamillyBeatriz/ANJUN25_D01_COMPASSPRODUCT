import prisma from '../prisma/client';
import { Product } from '../generated/prisma';
import { CreateProductInput, PaginationParams, UpdateProductInput } from '../dtos/product.dtos';

export const createProduct = async (
  data: CreateProductInput
): Promise<Product> => {
  return prisma.product.create({ data });
};

export const findByName = async (
  name: string
): Promise<Product | null> => {
  return prisma.product.findUnique({
    where: { name },
  });
};

export const findById = async (
  id: number
): Promise<Product | null> => {
  return prisma.product.findUnique({
    where: { id },
  });
};

export const findAll = async ({
  skip,
  take,
}: PaginationParams): Promise<Product[]> => {
  return prisma.product.findMany({
    skip,
    take,
    orderBy: {
      id: 'asc',
    },
  });
};

export const count = async (
): Promise<number> => {
  return prisma.product.count();
};

export const updateProduct = async (id: number, data: UpdateProductInput) => {
  return await prisma.product.update({
    where: { id },
    data,
  });
};

export const deleteById = async (id: number) => {
  return await prisma.product.delete({
    where: { id },
  });
};

export default {
  createProduct,
  findById,
  findByName,
  findAll,
  count,
  updateProduct,
  deleteById
}

