import { model, Schema } from "mongoose";

const UserSchema = new Schema({
	username: { type: String, default: null },
	email: { type: String, default: null },
	password: { type: String, default: null },
	updatedAt: { type: Date, default: null },
	createdAt: { type: Date, default: Date.now }
});

UserSchema.index({ username: 'text', email: 'text', created_at: 'text' });

UserSchema.pre('save', function (next) {
	try {
		this.set({ updatedAt: new Date() });
		next();
	} catch (error) {
			return next(error);
	}
})

export const UserModel = model('User', UserSchema)
