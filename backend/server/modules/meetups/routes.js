import { Router } from 'express';
import * as MeetupController from './controller';

const routes = new Router();

routes.post('/meetups', MeetupController.createMeetup);

export default routes;
