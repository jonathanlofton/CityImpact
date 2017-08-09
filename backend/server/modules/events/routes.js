import { Router } from 'express';
import * as EventController from './controller';

const routes = new Router();

routes.post('/events', EventController.createEvent);
routes.get('/events', EventController.getAllEvents);
routes.get('/event/:eventId', EventController.getAnEvent);
routes.delete('/event/:eventId', EventController.deleteAnEvent);
routes.patch('/event/:eventId', EventController.updateAnEvent);

export default routes;
