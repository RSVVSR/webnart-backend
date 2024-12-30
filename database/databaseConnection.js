const promise = require('bluebird');
const pgp = require('pg-promise')({
    promiseLib: promise
});
const connectionString = process.env.CONNECTION_DB;
const db = pgp(connectionString);

module.exports = { db };