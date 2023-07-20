// Route files
const itemRoutes = require('./modules/item');
const userRoutes = require('./modules/user');

/**
 * @function
 * Registers all app routes
 *
 * @param {object} app - Express app.
 */
module.exports = (app) => {
    app.use('/items', itemRoutes);
    app.use('/users', userRoutes);
};
