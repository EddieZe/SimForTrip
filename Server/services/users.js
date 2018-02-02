/**
 ========SimForTrip==========
 * Author: Eddie Zeltser
 * Create Date: 02/02/2018
 */
'use strict';

let userSch = require('../Infra/schemas/UserSchema');
let dbProp = require('../Infra/db/dbProperties');
let prop = require('../Infra/properties');
let connection = require('../Infra/db/dbConnection');
let fs = require('fs');
let userMdl;

if (!prop.IS_SIMULATOR) {
    try {
        userMdl = connection.getConnection().model(dbProp.COL_USERS, userSch.getSchema);
    }
    catch (err) {
        console.log('error: ' + err);
    }
}

let addNewUser = function (user) {
    return new Promise((resolve, reject) => {
        if (prop.IS_SIMULATOR) {
            //get data from file
            addNewUserToFile(reject, user, resolve);
        }
        else {
            // get data from DB
        }
    });
};

let getUsers = function () {
    return new Promise((resolve, reject) => {
        if (prop.IS_SIMULATOR) {
            //get data from file
            getUsersFromFile(resolve, reject);
        }
        else {
            // get data from DB
        }
    });
};

function getUsersFromFile(resolve, reject) {
    fs.readFile(dbProp.FILES_PATH + dbProp.USERS_FILENAME, (err, data) => {
        if (err) {
            reject(err);
        }
        else {
            resolve(JSON.parse(data));
        }
    });
}

function addNewUserToFile(reject, user, resolve) {
    fs.readFile(dbProp.FILES_PATH + dbProp.USERS_FILENAME, (err, data) => {
        if (err) {
            reject(err);
        }
        else {
            let users = JSON.parse(data);
            users.push(user);
            console.log(users);
            fs.writeFile(dbProp.FILES_PATH + dbProp.USERS_FILENAME, users, (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });

        }
    });
}

module.exports = {
    addNewUser: addNewUser,
    getUsers: getUsers
};