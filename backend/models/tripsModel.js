//const nedb = require("nedb");
const nedb = require("gray-nedb");

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
          console.log("function all() returns: ", entries);
        }
      });
    });
  }

  addEntry(trip, id) {
    var entry = {
      trip: trip,
      id: id,
    };
    return new Promise((resolve, reject) => {
      this.trip.insert(entry, function (err, doc) {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  }
}
module.exports = Trips;
