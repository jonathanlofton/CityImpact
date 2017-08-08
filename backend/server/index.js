import express from 'express';
import dbConfig from './config/db';
import middlewareConfig from './config/middleware';
import { EventRoutes } from './modules';
import passport from 'passport';
import UserRoutes from './modules/users/routes';

const app = express();

dbConfig();

middlewareConfig(app);

app.use('/api', [ UserRoutes(passport) ]);
// console.log(UserRoutes(passport));

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
