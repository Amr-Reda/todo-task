const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Schema } = mongoose;

const UserSchema = new Schema(
	{
        name: {
            type: String,
            required: true,
        },
		email: {
			type: String,
			unique: true,
			required: true,
        },
        password: {
            type: String,
            required: true,
		},
	},
	{
		collection: 'Users',
		timestamps: true,
		versionKey: false,
	}
);


// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
	if (this.password && this.isModified('password')) {
		const salt = await bcrypt.genSalt(9);
		this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Sign jwt
UserSchema.methods.generateJWT = function () {
	return jwt.sign(
		{
			_id: this._id,
			name: this.name,
		},
		process.env.JWT_SECRET,
		{
			algorithm: 'HS256',
		}
	);
};

UserSchema.methods.toAuthJSON = function () {
	const token = this.generateJWT();
	return {
        _id: this._id,
        email: this.email,
        name: this.name,
		token: `Bearer ${token}`,
	};
};

// Match user hashed password with entered password
UserSchema.methods.validatePassword = async function (enteredPassword) {
	const isMatch = await bcrypt.compare(enteredPassword, this.password);
	return isMatch;
};

const User = mongoose.model('Users', UserSchema);

module.exports = User;
