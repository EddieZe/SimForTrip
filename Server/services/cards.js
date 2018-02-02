/**
 ========SimForTrip==========
 * Author: Eddie Zeltser
 * Create Date: 02/02/2018
 */
'use strict';

let userSch = require('../Infra/schemas/UserSchema');
let dbProp = require('../Infra/db/dbProperties');
let prop = require('../Infra/properties');
var connection = require('./../infra/dataBase/dbConnection');
let userMdl;

try {
    userMdl = connection.getConnection().model(dbProp.COL_CARDS, userSch.getSchema());
}
catch (err) {
    console.log('error: ' + err);
}

let addNewCard = function (card) {
    return new Promise((resolve, reject) => {
        if (prop.IS_SIMULATOR) {
            //get data from file
        }
        else {
            // get data from DB
        }
    });
};

let getAllCards = function (card) {
    return new Promise((resolve, reject) => {
        if (prop.IS_SIMULATOR) {
            //get data from file
        }
        else {
            // get data from DB
        }
    });
};

let getCardDet = function (card) {
    return new Promise((resolve, reject) => {
        if (prop.IS_SIMULATOR) {
            //get data from file
        }
        else {
            // get data from DB
        }
    });
};

module.exports = {
    addNewCard: addNewCard,
    getAllCards: getAllCards,
    getCardDet: getCardDet
};