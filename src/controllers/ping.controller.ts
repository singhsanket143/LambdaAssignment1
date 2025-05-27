import { Request, Response } from 'express';

export function pingController(req: Request, res: Response) {
  res.send('Pong');
}
