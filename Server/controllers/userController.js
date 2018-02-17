/**
 ======== SimForTrip ==========
 * Author: Eddie Zeltser
 * Create Date: 16/02/2018
 */
'use strict';

var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var usersSrv = require('../services/usersSrv');

router.post('/', (req, res) => {
    usersSrv.addNewUser(req.body.newUser)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            let error = {
                msg: "There was a problem adding the information to the database.",
                stackErr: err
            };
            if(err && err.code === 11000){
                error.msg = "This user name is already taken.";
            }
            res.status(500).send(error);
    })
})

.get('/', (req, res) => {
   res.status(200).send('You have called GET rest and everything went OK');
});

router.delete('/:id', (req, res) => {
    res.status(200).send('You have called DELETE rest with the user ID ' + req.params.id + ' and everything went OK');
})

.put('/', (req, res) => {
    res.status(200).send('You have called PUT rest and everything went OK');
});

module.exports = router;