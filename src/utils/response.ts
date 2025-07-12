import { Response } from 'express';

export const sendError = (res: Response, status: number, message: string): Response => {
  return res.status(status).json({ error: message });
};

export const sendValidationErrors = (res: Response, errors: string[]): Response => {
  return res.status(400).json({ errors });
};

export const sendSuccess = <T> (res: Response, status: number, data: T): Response => {
  return res.status(status).json( data );
};