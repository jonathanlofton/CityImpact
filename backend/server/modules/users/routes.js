import { Router } from 'express';
import * as UserController from './controller';

const routes = new Router();

// routes.get('/users', UserController.getAllUsers);
// routes.post('/users', UserController.createUser);
routes.post('/users/auth0', UserController.loginWithAuth0);
// routes.get('/users/seed', UserController.seedEvents);

// routes.get('/users/:userId', UserController.getUser);
routes.patch('/users/:userId', UserController.updateUser);

export default routes;
