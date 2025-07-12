import prisma from '../prisma/client';
import { Product } from '../generated/prisma';
import { CreateProductInput } from '../dtos/product.dtos';

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



