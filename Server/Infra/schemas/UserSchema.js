/**
 ======== SimForTrip ==========
 * Author: Eddie Zeltser
 * Create Date: 02/02/2018
 */
'use strict';

let mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let UserSch = new Schema({
    userName: {
        type: String,
        required: true,
        index: {unique: true}
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    created_at: {type: Date},
    updated_at: {type: Date}
});

UserSch.pre('save', next => {
    var now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

UserSch.post('save', next => {
    console.log("New user was saved in the DB");
    next();
});

module.exports = {
    getSchema: UserSch
};