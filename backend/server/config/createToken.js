import jwt from 'jsonwebtoken';
import { devConfig } from './devConfig';

export const createToken = args => {
  jwt.sign({ id: args._id }, devConfig.JWT_SECRET);
};
