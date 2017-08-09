import { Router } from 'express';
import * as UserController from './controller';
// import passport from 'passport';

const routes = new Router();

const UserRoutes = passport => {
  routes.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email'] }));

  routes.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: 'api/events',
      failureRedirect: 'api/events'
    })
  );
  return routes;
};

export default UserRoutes;
