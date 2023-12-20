const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
const passport = require('passport');

router.get('/hostels', controller.listHostel);

router.get('/gethostel', controller.getHostel);
router.post(
	'/addTrip',
	passport.authenticate('jwt', { session: false }),
	controller.addTrip
);
router.delete(
	'/deletetrip',
	passport.authenticate('jwt', { session: false }),
	controller.deleteTrip
);

router.get(
	'/trips',
	passport.authenticate('jwt', { session: false }),
	controller.listTrips
);
router.get(
	'/authenticate',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		res.json({ message: 'Authenticated' });
	}
);

router.post('/login', controller.processLogin);
router.post('/register', controller.processNewUser);

router.use(function (req, res) {
	res.status(404);
	res.type('text/plain');
	res.send('404 Not found.');
});

router.use(function (err, req, res, next) {
	res.status(500);
	res.type('text/plain');
	res.send('Internal Server Error.');
});

module.exports = router;
