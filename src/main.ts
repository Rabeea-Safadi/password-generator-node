import express from 'express';
import cliColor from 'cli-color';
import errorHandler from './middleware/errorHandler';
import viewsRoutes from './routes/views.routes';
import { PORT } from './config/env';
import { join } from 'path';

function main() {
  const app = express();

  app.set('view engine', 'ejs');
  app.set('views', join(__dirname, 'views'));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use('', viewsRoutes);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(cliColor.cyan(`server started on port `) + cliColor.greenBright.bold(PORT));
  });
}

main();
