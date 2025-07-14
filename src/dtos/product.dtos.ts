export interface CreateProductDTO {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export type CreateProductInput = CreateProductDTO;

export type PaginationParams = {
  skip: number;
  take: number;
};

export type UpdateProductInput = Partial<Omit<CreateProductDTO, 'id'>>;

