import express from 'express';
import cliColor from 'cli-color';
import errorHandler from './middleware/errorHandler';
import { PORT } from './config/env';

function main() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(cliColor.cyan(`server started on port `) + cliColor.greenBright.bold(PORT));
    throw new Error('unknown issue');
  });
}

main();
