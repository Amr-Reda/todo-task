const User = require('../modules/user/model');
const Item = require('../modules/item/model');

const initSeed = async () => {
    const users = await User.countDocuments()

    if (users != 0) return

	// import data
    const userData = {
        password: 'Password123#',
        email: 'super.user@mail.com',
        name: 'super user',
    }
	const user = await User.create(userData)
    const itemData = {
        task: 'task 1',
        description: 'description 1',
        userId: user._id,
    }
	await Item.create(itemData)

    console.log("Seed Loaded Successfully");
    console.log("User Data ->");
    console.log("email: ", userData.email);
    console.log("password: ", userData.password);
    return
}

module.exports = initSeed;