/**
 ======== SimForTrip ==========
 * Author: Eddie Zeltser
 * Create Date: 16/02/2018
 */
'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let userController = require('./controllers/userController');
let aboutController = require('./controllers/aboutController');

app.use('/User', userController);
app.use('/About', aboutController);

module.exports = app;
