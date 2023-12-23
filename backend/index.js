const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport');

// Gives  access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

const app = express();

require('./config/passport')(passport);

const REACT_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';

app.use(
	cors({
		origin: REACT_URL,
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const router = require('./routes/routes');
app.use('/', router);

app.listen(3001, () => {
	console.log('Server started on port 3001. Ctrl^c to quit.');
});
