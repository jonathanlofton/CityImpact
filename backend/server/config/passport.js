import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';

import User from '../modules/users/model';
import configAuth from './auth';


export default passport => {

  passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		User.findById(id, (err, user) => {
			done(err, user);
		});
	});

  passport.use(new FacebookStrategy({
      clientID: configAuth.facebookAuth.clientID,
      clientSecret: configAuth.facebookAuth.clientSecret,
      callbackURL: configAuth.facebookAuth.callbackURL,
      profileFields: ['id', 'displayName', 'name', 'emails']
    },
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(() => {
        User.findOne({'facebook.id': profile.id}, (err, user) => {
          if (err) { return done(err); }
    			if (user) {
            return done(null, user);
          } else {
    				const newUser = new User();
    				newUser.facebook.id = profile.id;
    				newUser.facebook.token = accessToken;
    				newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
    				newUser.facebook.email = profile.emails ? profile.emails[0].value : "";

    				newUser.save(err => {
    					if (err) { throw err; }
    					return done(null, newUser);
    				});
    				console.log(profile);
    			}
        });
      });
    }
  ));
};
