// Route files
const itemRoutes = require('./modules/item');

/**
 * @function
 * Registers all app routes
 *
 * @param {object} app - Express app.
 */
module.exports = (app) => {
    app.use('/items', itemRoutes);
};
