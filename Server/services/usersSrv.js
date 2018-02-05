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
let bcrypt = require('bcrypt');
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
            addNewUserToFile(resolve, reject, user);
        }
        else {
            // get data from
            userMdl(user).save((err, data) => {
                if (err){
                    if(err.code === 11000){
                        reject('This user name is already taken')
                    }
                    reject(err);
                }
                else{
                    getHash(user.password)
                    .then(hash => {
                        resolve(hash);
                    })
                    .catch(err => {
                        reject(err);
                    })
                }
            })
        }
    });
};

let getUserDetails = function (user) {
    return new Promise((resolve, reject) => {
        if (prop.IS_SIMULATOR) {
            //get data from file
            getUsersFromFile(resolve, reject);
        }
        else {
            // get data from DB
            getUserDetFromDB(resolve, reject, user);
        }
    });
};

let inactiveUser = function (user){
    return new Promise((resolve, reject) =>{
        //TO DO
    })
};

let updateUserDetails  = function (user){
    return new Promise((resolve, reject) =>{
        //TO DO
    })
};

function getUserDetFromDB(resolve, reject, user) {
    userMdl.findOne({userName: user.userName, password: user.password}, (err, data) => {
        if (err) {
            reject(err);
        }
        else {
            if (data === null) {
                reject('user not found');
            }
            else {
                getHash(user.password)
                    .then(hash => {
                        let userDet = {
                            userName: data.userName,
                            email: data.email,
                            authenticationToken: hash
                        };
                        resolve(userDet);
                    })
                    .catch(err => {
                        reject(err);
                    });
            }
        }
    })
}

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

function addNewUserToFile(resolve, reject, user) {
    fs.readFile(dbProp.FILES_PATH + dbProp.USERS_FILENAME, (err, data) => {
        if (err) {
            reject(err);
        }
        else {
            let users = JSON.parse(data);
            users.push(user);
            //console.log(users);
            fs.writeFile(dbProp.FILES_PATH + dbProp.USERS_FILENAME, JSON.stringify(users), (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    getHash(user.password)
                    .then(hash => {
                        resolve(hash);
                    })
                    .catch(err => {
                        reject(err);
                    });
                }
            });
        }
    });
}

let getHash = function (pass) {
    return new Promise((resolve, reject) => {
        let currDate = new Date;
        bcrypt.hash(pass, currDate.getSeconds()/5, (err, hash) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(hash);
            }
        })
    });
};

module.exports = {
    addNewUser: addNewUser,
    getUserDetails: getUserDetails,
    inactiveUser: inactiveUser,
    updateUserDetails: updateUserDetails
};