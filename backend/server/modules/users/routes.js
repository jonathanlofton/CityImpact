import { Router } from 'express';

import * as UserController from './controller';

const routes = new Router();

routes.post('/users/auth0', UserController.loginWithAuth0);

console.log(UserController);

routes.get('/users/seed', UserController.seedEvents);

export default routes;
