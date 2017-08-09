import express from 'express';
import dbConfig from './config/db';
import middlewareConfig from './config/middleware';
import { EventRoutes } from './modules';
import passport from 'passport';
import AuthRoutes from './modules/auth/routes';

const app = express();

dbConfig();

middlewareConfig(app);

app.use('/api', [EventRoutes]);
app.use('/', [ AuthRoutes(passport) ]);
// console.log(AuthRoutes(passport));


const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
