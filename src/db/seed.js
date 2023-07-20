const User = require('../modules/user/model');

const initSeed = async () => {
    const users = await User.countDocuments()

    if (users != 0) return

	// import users
    const user = {
        password: 'Password123#',
        email: 'super.user@mail.com',
        name: 'super user',
    }
	await User.create(user)

    console.log("Seed Loaded Successfully");
    console.log("User Data ->");
    console.log("email: ", user.email);
    console.log("password: ", user.password);
    return
}

module.exports = initSeed;