import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

import User from '../modules/users/model';
import { devConfig } from './devConfig';

const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeader('Authorization'),
  secretOrKey: devConfig.JWT_SECRET,
};

const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
  try {
    const user = await User.findById(payload.id);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (e) {
    return done(e, false);
  }
});

passport.use(jwtStrategy);
