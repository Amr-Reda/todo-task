const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const User = require('../modules/user/model');

const jwtOpts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET,
	algorithms: ['HS256'],
};

passport.use(
	'jwt',
	new JwtStrategy(jwtOpts, async (payload, done) => {
		try {
			const user = await User.findById(payload._id);
			if (user) {
				return done(null, user);
			}
			return done(null, false);
		} catch (err) {
			done(err);
		}
	})
);

module.exports = passport;