const initRoutes = require('./routes');
const connectDB = require('./db/mongo');

/**
 * @function
 * Initializes app components
 *
 * @param {object} app - Express app.
 */
module.exports = (app) => {
  initRoutes(app);
  connectDB();
};
