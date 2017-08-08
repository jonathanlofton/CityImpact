import { Router } from 'express';
import * as UserController from './controller';
// import passport from 'passport';

const routes = new Router();

const UserRoutes = passport => {
  routes.get('/auth/facebook', passport.authenticate('facebook'));

  routes.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/',
      failureRedirect: '/'
    })
  );
  return routes;
};

export default UserRoutes;
