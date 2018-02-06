/**
 ========SimForTrip==========
 * Author: Eddie Zeltser
 * Create Date: 02/02/2018
 */
'use strict';

let cardSch = require('../infra/schemas/CardSchema');
let dbProp = require('../infra/db/dbProperties');
let prop = require('../infra/properties');
let connection = require('../infra/db/dbConnection');
let cardMdl;

if (!prop.IS_SIMULATOR) {
    try {
        cardMdl = connection.getConnection().model(dbProp.COL_CARDS, cardSch.getSchema);
    }
    catch (err) {
        console.log('error: ' + err);
    }
}

let addNewCard = function (card) {
    return new Promise((resolve, reject) => {
        if (prop.IS_SIMULATOR) {
            //get data from file
        }
        else {
            cardMdl(card).save((err, data) => {
                if (err) {
                    if (err.code === 11000) {
                        reject('This SIM card is already in the system')
                    }
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
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
            cardMdl.findOne({IMSI : card.IMSI}, (err, data) => {
                if (err){
                    reject(err);
                }
                else{
                    if (data === null){
                        reject('SIM card was not found');
                    }
                    else{
                        resolve(data);
                    }
                }
            })
        }
    });
};

module.exports = {
    addNewCard: addNewCard,
    getCardDet: getCardDet
};