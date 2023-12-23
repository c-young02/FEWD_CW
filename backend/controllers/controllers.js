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
		.catch((err) => {});
};

exports.getHostel = async (req, res) => {
	const { name } = req.query;

	// If a name query parameter is provided, find the hostel by name
	try {
		// Use the find method of Datastore to find a hostel by its name
		hostel.hostel.find({ name: name }, function (err, docs) {
			if (err) {
				res.status(500).send(err);
			} else if (docs.length > 0) {
				res.json(docs[0]);
			} else {
				res.status(404).send('Hostel not found');
			}
		});
	} catch (err) {
		res.status(500).send(err);
	}
};

exports.createReview = function (req, res) {
	const id = req.body.hostelId;
	const username = req.body.username;
	const rating = req.body.rating;
	const review = req.body.reviewText;

	hostel
		.createReview(id, username, rating, review)
		.then(() => {
			res.status(200).json({ message: 'Review created successfully.' });
		})
		.catch((err) => {
			console.error('Failed to create review:', err);
			res
				.status(500)
				.json({ error: 'An error occurred while creating the review.' });
		});
};

exports.deleteReview = function (req, res) {
	const id = req.query.id;
	hostel
		.deleteReview(id)
		.then(() => {
			res.status(200).json({ message: 'Review deleted successfully.' });
		})
		.catch((err) => {
			console.error('Failed to delete review:', err);
			res
				.status(500)
				.json({ error: 'An error occurred while deleting the review.' });
		});
};

exports.listUserReviews = async (req, res) => {
	const { username } = req.query;

	try {
		// Use the find method of Datastore to find reviews by their username
		const docs = await hostel.findUserReviews(username);
		res.status(200).json(docs);
	} catch (err) {
		res.status(500).send(err);
	}
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
	trip
		.addEntry(req.body)
		.then(() => {
			res.status(200).json({ message: 'Trip added successfully.' });
		})
		.catch((err) => {
			res
				.status(500)
				.json({ error: 'An error occurred while adding the trip.' });
		});
};

exports.deleteTrip = function (req, res) {
	const id = req.query.id;
	const username = req.query.username;
	trip
		.deleteEntry(username, id)
		.then(() => {
			res.status(200).json({ message: 'Trip deleted successfully.' });
		})
		.catch((err) => {
			console.error('Failed to delete trip:', err);
			res
				.status(500)
				.json({ error: 'An error occurred while deleting the trip.' });
		});
};

exports.showTrip = function (req, res) {
	const id = req.query.id;
	const username = req.query.username;
	trip
		.displayEntry(username, id)
		.then((tripDetails) => {
			res
				.status(200)
				.json({ message: 'Trip showed successfully.', trip: tripDetails });
		})
		.catch((err) => {
			console.error('Failed to show trip:', err);
			res
				.status(500)
				.json({ error: 'An error occurred while showing the trip.' });
		});
};

exports.updateTrip = function (req, res) {
	const id = req.body.id;
	const username = req.body.username;
	const newTripData = req.body;

	trip
		.updateEntry(username, id, newTripData)
		.then(() => {
			res.status(200).json({ message: 'Trip updated successfully.' });
		})
		.catch((err) => {
			console.error('Failed to update trip:', err);
			res
				.status(500)
				.json({ error: 'An error occurred while updating the trip.' });
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

			db.insert(newUser, function (err, user) {
				res.json({ success: true, user: user });
			});
		}
	});
};
