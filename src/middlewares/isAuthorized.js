const passport = require('passport');

const isAuthorized = () => {
	return (req, res, next) => {
		try {
			if (
				!req.headers.authorization ||
				!req.headers.authorization.startsWith('Bearer')
			) {
				return res
					.status(401)
					.json({ success: false, message: 'Unauthorized' });
			}
			const token = req.headers.authorization.split(' ')[1];
			if (!token) {
				return res
					.status(401)
					.json({ success: false, message: 'Unauthorized' });
			}
			passport.authenticate(
				'jwt',
				{ session: false },
				async (err, user) => {
					if (err) {
						return res
							.status(500)
							.json({ success: false, message: err.message });
					}
					req.user = user;
					return next();
				}
			)(req, res, next);
		} catch (err) {
			return res
				.status(500)
				.json({ success: false, message: err.message });
		}
	};
};

module.exports = isAuthorized;