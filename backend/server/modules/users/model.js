import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    email: {
      type: String,
      unique: true,
    },
    fullName: String,
    avatar: String,
    providerData: {
      uid: String,
      provider: String,
    },
    events: {
      type: Schema.Types.ObjectId,
       ref: 'Event'
    }
  },
  { timestamps: true }
);


UserSchema.statics.findOrCreate = async function (userInfo) {

  try {
    const user = await this.findOne({
      email: userInfo.email
    });

    if (!user) {
      return await this.create(userInfo);
    }
    return user;
  } catch (e) {
    console.log(`ERROR FROM USERS MODEL`);
    return e;
  }
};

export default mongoose.model('User', UserSchema);
