import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

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
  },
  { timestamps: true },
);
	// facebook: {
	// 	id: String,
	// 	token: String,
	// 	email: String,
	// 	name: String
	// }


// UserSchema.methods.generateHash = password => {
// 	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
// };
//
// UserSchema.methods.validPassword = password => {
// 	return bcrypt.compareSync(password, this.user.password);
// };

UserSchema.statics.findOrCreate = async function (args) {
  try {
    const user = await this.findOne({
      email: args.email,
      fullName: args.fullName,
    });

    if (!user) {
      return await this.create(args);
    }

    return user;
  } catch (e) {
    return e;
  }
};

export default mongoose.model('User', UserSchema);
