export class DuplicateProductError extends Error {
  constructor(message: string = 'name already registered') {
    super(message);
    this.name = 'DuplicateProductError';
  }
}
