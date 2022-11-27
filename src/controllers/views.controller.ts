import { render } from 'ejs';
import { Request, Response } from 'express';
import random from 'lodash.random';

interface RequestBody {
  minLength: number;
  maxLength: number;
  includeSymbols: boolean;
}

export function indexHandler(req: Request, res: Response) {
  res.render('index');
}

export function generatorHandler(req: Request, res: Response) {
  const { minLength, maxLength, includeSymbols } = req.body as RequestBody;

  const lower = 'qwertyuioplkjhgfdsazxcvbnm';
  const upper = lower.toUpperCase();
  const nums = '1234567890';
  const symbols = '!@#$%';

  const chosen = includeSymbols ? lower + upper + nums + symbols : lower + upper + nums;

  const length = random(maxLength, minLength, false);
  let generatedPassword = '';

  for (let i = 0; i < length; i++) {
    generatedPassword += chosen[random(chosen.length, 0)];
  }

  res.render('index', { generatedPassword });
}
