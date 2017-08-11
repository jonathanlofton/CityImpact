import bodyParser from 'body-parser';
import morgan from 'morgan';
import passport from 'passport';

export default app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(morgan('dev'));
  app.use(passport.initialize());
};
