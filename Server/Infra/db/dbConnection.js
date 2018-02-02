/**
 ======== SimForTrip ==========
 * Author: Eddie Zeltser
 * Create Date: 02/02/2018
 */
'use strict';

let connection;
let prop = require('./dbProperties');
var mongoose = require('mongoose');

function getConnection() {

    mongoose.Promise = global.Promise;

    function createConnection() {
        return mongoose.createConnection(prop.DB_HOST)
            .on('error', console.error.bind(console, 'connection error:'));
    }

    if (!connection) {
        connection = createConnection();
    }
    return connection;
}

module.exports = {getConnection: getConnection};