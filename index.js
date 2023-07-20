const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config");
const initApp = require("./src/index");
const passport = require('./src/auth/passport');

// Express App
const app = express();

// Parse application/json
app.use(bodyParser.json({ limit: "50mb" }));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// intialize auth strategy
app.use(passport.initialize());

// Initialize app
initApp(app);

app.listen(PORT, () => {
    console.log(`App is up & running on port ${PORT}`);
});
