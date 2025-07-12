import { Response } from 'express';

export const sendError = (res: Response, status: number, message: string) => {
  res.status(status).json({ error: message });
};

export const sendValidationErrors = (res: Response, errors: string[]) => {
  res.status(400).json({ errors });
};
