import { Router } from 'express';
import * as EventController from './controller';

const routes = new Router();

routes.post('/events', EventController.createEvent);
routes.get('/events', EventController.getAllEvents);

export default routes;
