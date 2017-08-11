import passport from 'passport';
import './config/passport';

//for when we need to protect a route with our user, import and plug in between arguments
//   routes.get('/someroute/', requireJwtAuth, ControllerMethod);

export const requireJwtAuth = passport.authenticate('jwt', { session: false });
