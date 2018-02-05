/**
 ======== SimForTrip ==========
 * Author: Eddie Zeltser
 * Create Date: 02/02/2018
 */
'use strict';

let mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let CardSch = new Schema({
    IMSI: {
        type: String,
        required: true,
        index: {unique: true}
    },
    size: {
        type: String,
        required: true,
        enum: ['Standard', 'Micro', 'Nano']
    },
    vendor: {
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

CardSch.pre('save', next => {
    var now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

CardSch.post('save', () => {
    console.log("new SIM card was saved in the DB");
});

module.exports = {
    getSchema: CardSch
};