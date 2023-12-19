//const nedb = require("nedb");
const nedb = require('gray-nedb');

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

	getAllEntries() {
		return new Promise((resolve, reject) => {
			this.trip.find({}, function (err, entries) {
				if (err) {
					reject(err);
				} else {
					resolve(entries);
					console.log('function all() returns: ', entries);
				}
			});
		});
	}

	async addEntry({ username, title, stages }, id) {
		try {
			const affectedDocuments = await new Promise((resolve, reject) => {
				this.trip.update(
					{ username },
					{ $push: { trips: { title, stages } }, $set: { id } },
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
