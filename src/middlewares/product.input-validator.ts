import { Request, Response, NextFunction } from 'express';

export const validateProductInput = (
  req: Request, 
  res: Response, 
  next: NextFunction) => {
  const { name, description, price, quantity } = req.body;
  const errors: string[] = [];

  const checkField = <T>(
    value: T,
    fieldName: string,
    expectedType: string,
    required: boolean
  ) => {
    if (required && value === undefined) {
      errors.push(`${fieldName} is required.`);
    } else if (expectedType === 'string' && typeof value === 'string' && value.trim() === '') {
    errors.push(`${fieldName} must not be empty.`);
    } else if (value !== undefined && typeof value !== expectedType) {
      errors.push(`${fieldName} not is ${expectedType}.`);
    }
  };

  checkField(name, 'name', 'string', true);
  checkField(description, 'description', 'string', true);
  checkField(price, 'price', 'number', true);
  checkField(quantity, 'quantity', 'number', true);

  if (errors.length > 0) {
    res.status(400).json({ errors });
  }

  next();
};
