/**
 ======== SimForTrip ==========
 * Author: Eddie Zeltser
 * Create Date: 02/02/2018
 */
'use strict';

let mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let UserSch = new Schema({
    userName: {type: String},
    email: {type: String},
    password: {type: String},
    created_at: {type: Date},
    updated_at: {type: Date}
});

UserSch.pre('save', function (next) {
    var now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

module.exports = {
    getSchema: UserSch
};