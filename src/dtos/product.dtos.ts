export interface CreateProductDTO {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export type CreateProductInput = {
  name: string;
  description: string;
  price: number;
  quantity: number;
};

export type PaginationParams = {
  skip: number;
  take: number;
};
