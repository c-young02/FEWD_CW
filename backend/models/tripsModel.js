//const nedb = require("nedb");
const nedb = require('gray-nedb');
const { v4: uuidv4 } = require('uuid');

class Trips {
	constructor(tripFilePath) {
		console.log(tripFilePath);
		if (tripFilePath) {
			this.trip = new nedb(tripFilePath);
			tripFilePath;
		} else {
			this.trip = new nedb();
		}
	}

	getAllEntries(query) {
		return new Promise((resolve, reject) => {
			this.trip.find(query, (err, docs) => {
				if (err) {
					reject(err);
				} else {
					resolve(docs);
				}
			});
		});
	}

	async addEntry({ username, title, stages }) {
		try {
			const tripId = uuidv4(); // Generate a new UUID

			const affectedDocuments = await new Promise((resolve, reject) => {
				this.trip.update(
					{ username },
					{ $push: { trips: { id: tripId, title, stages } } },
					{ upsert: true },
					(err, affectedDocuments) => {
						if (err) {
							reject(err);
						} else {
							resolve(affectedDocuments);
						}
					}
				);
			});

			// Compact the data file after the update operation
			try {
				this.trip.persistence.compactDatafile();
			} catch (err) {
				console.error('Failed to compact data file:', err);
			}

			return affectedDocuments;
		} catch (err) {
			console.error('Failed to add entry:', err);
			throw err;
		}
	}
}

module.exports = Trips;
