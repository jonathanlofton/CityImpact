import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
	user: {
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
