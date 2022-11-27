import { Router } from 'express';
import { indexHandler } from '../controllers/views.controller';

const viewsRoutes = Router();

viewsRoutes.get('/', indexHandler);

export default viewsRoutes;
