import { Router } from 'express';
import * as AuthController from './controller';

const routes = new Router();

const AuthRoutes = passport => {
  routes.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email'] }));

  routes.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/api/events'
    })
  );

  routes.get('/profile', isLoggedIn, (req, res) => {
		// res.redirect(`/api/users/${req.user.id}`);
    return res.json(req.user);
	});

  return routes;
};

const isLoggedIn = (req, res, next) => {
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/api/events');
};

export default AuthRoutes;
