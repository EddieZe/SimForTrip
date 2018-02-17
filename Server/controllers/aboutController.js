/**
 ======== SimForTrip ==========
 * Author: Eddie Zeltser
 * Create Date: 17/02/2018
 */
'use strict';

var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

router.post('/', (req,res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'eddie.zeltser@gmail.com',
            pass: ''
        }
    });

    var mailOptions = {
        from: 'eddie.zeltser@gmail.com',
        to: 'eddie.zeltser@gmail.com',
        subject: req.body.subject || 'Sending Email using Node.js',
        text: req.body.text || 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(err, info){
        if (err) {
            res.status(500).send(error);
        } else {
            res.status(200).send('Email sent: ' + info.response);
        }
    });
});

module.exports = router;