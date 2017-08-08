import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middleware';
import { EventRoutes } from './modules';
import { UserRoutes } from './modules';

const app = express();

dbConfig();

middlewaresConfig(app);

// console.log(UserRoutes);
// console.log(EventRoutes);

app.use('/api', [EventRoutes]);


const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
