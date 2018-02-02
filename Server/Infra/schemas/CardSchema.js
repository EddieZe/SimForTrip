/**
 ======== SimForTrip ==========
 * Author: Eddie Zeltser
 * Create Date: 02/02/2018
 */
'use strict';

let mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let CardSch = new Schema({
    IMSI: {type: String},
    type: {type: String},
    size: {type: String},
    vendor: {type: String},
    created_at: {type: Date},
    updated_at: {type: Date}
});

CardSch.pre('save', function (next) {
    var now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

module.exports = {
    getSchema: CardSch
};