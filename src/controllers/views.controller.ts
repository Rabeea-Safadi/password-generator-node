import { Request, Response } from 'express';

export function indexHandler(req: Request, res: Response) {
  res.render('index');
}
