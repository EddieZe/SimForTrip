/**
 ======== SimForTrip ==========
 * Author: Eddie Zeltser
 * Create Date: 05/02/2018
 */
'use strict';
let cardsSrv = require('../Server/services/cardsSrv');

describe("Cards Tests", () => {
    "use strict";

    it("Should add new SIM card to DB", done => {
        let newCard = {
            "IMSI" : "54654654654654",
            "size" : "Nano",
            "vendor" : "SingTel"
        };
        cardsSrv.addNewCard(newCard)
        .then(cardDet => {
            console.log(cardDet);
            done();
        })
        .catch(err => {
            console.log(err);
            done();
        })
    });
});