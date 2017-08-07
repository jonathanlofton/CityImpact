import express from 'express';
import dbConfig from './config/db';

const app = express();

//DB

dbConfig();


const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
