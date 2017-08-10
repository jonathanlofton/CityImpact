import mongoose from 'mongoose';
import { devConfig } from './devConfig';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(`${devConfig.DB_URL}`,
  {useMongoClient: true,});
  mongoose.connection
    .once('open', () => console.log('Mongodb up and running'))
    .on('error', err => console.log(err));
};
