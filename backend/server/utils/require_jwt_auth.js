import passport from 'passport';

import './config/passport';

export const requireJwtAuth = passport.authenticate('jwt', { session: false });
