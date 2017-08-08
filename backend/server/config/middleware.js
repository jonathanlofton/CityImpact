import bodyParser from 'body-parser';
import morgan from 'morgan';

export default app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(morgan('dev'));

  //aded for auth
  app.use(cookieParser());
  app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
};
