/**
 ======== SimForTrip ==========
 * Author: Eddie Zeltser
 * Create Date: 02/02/2018
 */
'use strict';

/*=============================== DB ===============================*/

const DB_HOST = 'mongodb://localhost:27017/SimForTrip';
const COL_USERS = 'users';
const COL_CARDS = 'cards';

/*=============================== Simulator ===============================*/
const FILES_PATH = './Server/Infra/data/';
const USERS_FILENAME = 'users.json';
const CARDS_FILENAME = 'cards.json';

module.exports = {
    DB_HOST: DB_HOST,
    COL_USERS: COL_USERS,
    COL_CARDS: COL_CARDS,
    FILES_PATH: FILES_PATH,
    USERS_FILENAME: USERS_FILENAME,
    CARDS_FILENAME: CARDS_FILENAME
};