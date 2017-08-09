import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const UserSchema = new Schema({
	// local: {
	// 		username: {
	// 		type: String,
	// 		required: true
	// 	},
	// 	email: {
	// 		type: String,
	// 		required: true
	// 	},
	// 	passwordDigest: {
	// 		type: String,
	// 		required: true
	// 	}
	// },

	facebook: {
		id: String,
		token: String,
		email: String,
		name: String
	}
});

UserSchema.methods.generateHash = password => {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
};

UserSchema.methods.validPassword = password => {
	return bcrypt.compareSync(password, this.user.password);
};

export default mongoose.model('User', UserSchema);
