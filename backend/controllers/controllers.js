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
			console.log(updatedList);
		})
		.catch((err) => {
			console.log('promise rejected', err);
		});
};

exports.listTrips = function (req, res) {
	trip
		.getAllEntries()
		.then((list) => {
			res.json(list);
		})
		.catch((err) => {
			console.log('promise rejected', err);
		});
};
exports.addTrip = function (req, res) {
	console.log('req body to add to database : ', req.body);
	trip.addEntry(req.body).catch((err) => {
		console.log('promise rejected', err);
	});
	res.redirect('/');
};

exports.processLogin = function (req, res, next) {
	db.findOne({ username: req.body.username }, { _id: 1 }, function (err, user) {
		if (!user) {
			res.status(401).json({ success: false, msg: 'could not find user' });
		}
		console.log(user);
		// Function defined at bottom of app.js
		if (user) {
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
					.json({ success: false, msg: 'you entered the wrong password' });
			}
		}
	});
};

exports.processNewUser = function (req, res, next) {
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
};
