import { Router } from 'express';
import * as AuthController from './controller';

const routes = new Router();

const AuthRoutes = passport => {
  routes.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email'] }));

  routes.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/api/users/login',
      failureRedirect: '/api/events'
    })
  );
  return routes;
};

export default AuthRoutes;
