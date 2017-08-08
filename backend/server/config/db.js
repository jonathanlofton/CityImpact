import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/CityImpactDB',
  {useMongoClient: true,});
  mongoose.connection
    .once('open', () => console.log('Mongodb up and running'))
    .on('error', err => console.log(err));
};
