import { Request, Response } from 'express';

export function userController(req: Request, res: Response) {
  res.send({ message: 'User route works!' });
}
