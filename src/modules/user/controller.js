const User = require("./model");

const auth = async (req, res) => {
    try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ success: false, message: 'Auth Failed, please make sure email or password is correct!' })
		}
		const isMatch = await user.validatePassword(password);
		if (!isMatch) {
			return res.status(401).json({ success: false, message: 'Auth Failed, please make sure email or password is correct!' })
		}
        const data = user.toAuthJSON()
		return res
			.status(200)
			.json({
                success: true,
				message: 'User authenticated successfully',
				data: {user: data},
			});
	} catch (error) {
		return res
			.status(500)
			.json({
                success: false,
				message: error.message,
			});
	}
};

module.exports = {
    auth,
};
