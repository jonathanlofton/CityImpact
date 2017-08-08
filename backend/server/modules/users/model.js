import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  passwordDigest: {
    type: String,
    required: true
  },


});

export default mongoose.model('User', UserSchema);
