/**
 ======== SimForTrip ==========
 * Author: Eddie Zeltser
 * Create Date: 16/02/2018
 */
'use strict';

var app = require('./app');
var port = process.env.PORT || 3000;
var server = app.listen(port);

server.on('listening', () => {
    console.log('Server started successfully and listening on port ' + port);
});

server.on('error', (err) => {
    console.log('Something went wrong with server start up. please see the following error:');
    console.log('Error code: ' + err.code);
    console.log('Full error: ' + err);
});