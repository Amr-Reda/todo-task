const mongoose = require('mongoose');
const initSeed = require('./seed');

/**
 * @function
 * Connecting to Mongo DB.
 */
const connectDB = async () => {
    try {
        
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(
            `MongoDB connected: ${conn.connection.host}:${conn.connection.port}`
        );
    } catch (error) {
        console.error(error)
    }

	//DB seeder
	await initSeed()
};

module.exports = connectDB;
