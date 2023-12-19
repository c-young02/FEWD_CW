const hostelDAO = require('../models/hostelModel');
const hostel = new hostelDAO({ filename: 'hostel.db', autoload: true });
const tripDAO = require('../models/tripsModel');
const trip = new tripDAO({ filename: 'trips.db', autoload: true });
const utils = require('../lib/utils');
const db = require('../config/users');

exports.listHostel = function (req, res) {
	hostel
		.getAllEntries()
		.then((list) => {
			if (list.length === 0) {
				// Database is empty, so initialize it
				hostel.init();
			}
			return hostel.getAllEntries();
		})
		.then((updatedList) => {
			res.json(updatedList);
		})
		.catch((err) => {
			console.log('promise rejected', err);
		});
};

exports.listTrips = function (req, res) {
	const username = req.query.username;
	trip
		.getAllEntries({ username: username })
		.then((list) => {
			res.json(list);
		})
		.catch((err) => {
			console.error('Promise rejected', err);
			res
				.status(500)
				.json({ error: 'An error occurred while fetching trips.' });
		});
};

exports.addTrip = function (req, res) {
	console.log('req body to add to database : ', req.body);
	trip
		.addEntry(req.body)
		.then(() => {
			res.status(200).json({ message: 'Trip added successfully.' });
		})
		.catch((err) => {
			console.log('promise rejected', err);
			res
				.status(500)
				.json({ error: 'An error occurred while adding the trip.' });
		});
};

exports.processLogin = function (req, res, next) {
	db.findOne({ username: req.body.username }, { _id: 1 }, function (err, user) {
		if (err) {
			console.error(err);
			return res
				.status(500)
				.json({ success: false, msg: 'An error occurred during login.' });
		}
		if (!user) {
			return res
				.status(401)
				.json({ success: false, msg: 'Incorrect username or password.' });
		}
		console.log(user);
		const isValid = utils.validPassword(
			req.body.password,
			user.hash,
			user.salt
		);
		if (isValid) {
			const tokenObject = utils.issueJWT(user);
			res.status(200).json({
				success: true,
				token: tokenObject.token,
				expiresIn: tokenObject.expires,
				username: user.username,
			});
		} else {
			res
				.status(401)
				.json({ success: false, msg: 'Incorrect username or password.' });
		}
	});
};

exports.processNewUser = function (req, res, next) {
	// First, check if a user with the given username already exists
	db.findOne({ username: req.body.username }, function (err, user) {
		if (user) {
			// If a user with the given username already exists, respond with an error message
			res.status(400).json({
				success: false,
				msg: 'This username is already taken. Please try again with a different username.',
			});
		} else {
			// If no such user exists, proceed with creating the new user
			const saltHash = utils.genPassword(req.body.password);

			const salt = saltHash.salt;
			const hash = saltHash.hash;

			const newUser = {
				username: req.body.username,
				hash: hash,
				salt: salt,
			};

			console.log(newUser);

			db.insert(newUser, function (err, user) {
				res.json({ success: true, user: user });
			});
		}
	});
};
