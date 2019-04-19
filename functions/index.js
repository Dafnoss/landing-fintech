'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const telegraf = require('telegraf');

//to make it work you need gmail account
const gmailEmail = functions.config().gmail.login;
const gmailPassword = functions.config().gmail.pass;

admin.initializeApp();

//creating function for sending emails
var goMail = function (lead) {

//transporter is a way to send your emails
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmailEmail,
            pass: gmailPassword
        }
    });

    // setup email data with unicode symbols
    //this is how your email are going to look like
    const mailOptions = {
        from: gmailEmail, // sender address
        to: 'info@azoft.com', // list of receivers
        subject: 'New Lead from Fintech Landing', // Subject line
        //text: '! ' + lead.name + ' send you a message from: ' + lead.mail + '. ' + 'Message: ' + lead.message // plain text body
        html:
            'Congratulation! You received new Fintech Lead. ' +
            '<br>' +
            '<br>' +
            '<b>Request details:</b>' + '<br>' +
            '<br>' +
            'Name: ' + lead.name + '<br>' +
            ' From: ' + lead.mail + '<br>' +
            ' Phone: ' + lead.phone + '<br>' +
            'Message: ' + lead.message +
            '<br>' +
            '<br>' +
            'Sent from the page: https://fintech.azoft.com/'
        // plain text body // html body
    };

    //this is callback function to return status to firebase console
    const getDeliveryStatus = function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    };

    //call of this function send an email, and return status
    transporter.sendMail(mailOptions, getDeliveryStatus);
};

//send telegram message https://t.me/joinchat/DFGNwBMWLi9y5jfX2f1mTQ
var goTelegram = function (lead) {

    const bot = new telegraf.Telegram(functions.config().bot.token);
    return bot.sendMessage(functions.config().bot.chat,
         '!' + lead.name + ' send you a message from: ' + lead.mail + ' and his phone number is: ' + lead.phone + '. ' + 'Message: ' + lead.message // plain text body
    );
};

//.onDataAdded is watches for changes in database
exports.onDataAdded = functions.database.ref('/leads/{sessionId}').onCreate(function (snap, context) {

    //here we catch a new data, added to firebase database, it stored in a snap variable
    const createdData = snap.val();
    var leadData = createdData;

    //here we send new data using function for sending emails
    goMail(leadData);
    goTelegram(leadData);
});
