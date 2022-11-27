import { Router } from 'express';
import { generatorHandler, indexHandler } from '../controllers/views.controller';

const viewsRoutes = Router();

viewsRoutes.get('/', indexHandler);

viewsRoutes.post('/generate', generatorHandler);

export default viewsRoutes;
