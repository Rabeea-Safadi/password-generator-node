import { Request, Response, NextFunction } from 'express';
import cliColor from 'cli-color';

export default function (err: Error, req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) {
    return next(err);
  }

  console.log(cliColor.red.bold(err.message));

  return res.render('error', {
    errorMessage: err.message,
    errorName: err.name,
  });
}
