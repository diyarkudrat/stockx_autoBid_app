const mongoose = require('mongoose');
const { assert } = require('console');
assert = require('assert');

const url = "mongodb://localhost/autoBid-db";
mongoose.Promise = global.Promise;
mongoose.connect(
    url,
    { useNewUrlParser: true },
    function(err, db) {
        assert.equal(null, err);
        console.log("Connected to database");

        // db.close(); for testing purposes
    }
);

mongoose.connection.on("error", console.error.bind(console, "MongoDB connection error:"));
mongoose.set('debug', true);

module.exports = mongoose.connection;