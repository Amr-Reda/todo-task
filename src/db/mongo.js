const mongoose = require('mongoose');

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

const initSeed = async () => {
    
    return
}

module.exports = connectDB;
