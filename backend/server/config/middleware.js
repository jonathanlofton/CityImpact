import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import morgan from 'morgan';
import passport from 'passport';
import flash from 'connect-flash';
import passportConfig from './passport';

export default app => {
  passportConfig(passport);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(morgan('dev'));

  //aded for auth
  app.use(cookieParser());
  app.use(session({secret: 'anystringoftext',
  				 saveUninitialized: true,
  				 resave: true}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
};
