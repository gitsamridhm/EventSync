const nodemailer = require("nodemailer");
const { generateSnowflake } = require("../db");
require("dotenv").config({path: ".env.local"});
const express = require("express");
const cors = require("cors");


const transporter = nodemailer.createTransport(
    {
        host: 'smtp.gmail.com',
        port: 465, // Zoho uses port 465 for SSL
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'contact.eventsync@gmail.com', // username for your mail server
            pass: process.env.MAIL_PASSWORD, // password
        },
    }
);


const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.NEXT_PUBLIC_APP_URL }));

app.post("/send-verification-email", async (req, res) => {
    let verificationCode = generateSnowflake();
    // Get last 5 digits of snowflake

    verificationCode = verificationCode.toString().slice(-5);

    const userEmail = req.body["email"];

    const mailOptions = {
        from: "EventSync <contact@eventsync.app>",
        to: userEmail,
        subject: 'EventSync Verification Code',
        html: `<div style="border-radius:15px;text-align:center;background:#262626;font-family:'Lato',sans-serif;color:white;padding-bottom:50px"> <br><div style="margin:40px auto auto;background:#292524;border-radius:10px;padding:20px;border:1px solid #0C0A09;max-width:800px"> <h1 style="font-weight:normal;line-height:10px">Your verification code is: <strong>${verificationCode}</strong></h1> <p style="color:gray;line-height:25px"> If you did not sign up, please ignore this email.<br><strong><span style="color:white">Event Sync</span></strong></p></div></div>`
    }

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send({message: "Error sending email"});
        } else {
            console.log('Email sent: ' + info.response);
            res.send({message: verificationCode});
        }
    });
});

app.post("/send-meetup-invite", async (req, res) => {
    const {email, inviteLink, meetupName} = req.body;

    const mailOptions = {
        from: "EventSync <contact@eventsync.app>",
        to: email,
        subject: `EventSync Invite to ${meetupName}`,
        text: `You have been invited to join the EventSync meetup ${meetupName}! Use the following link to join: ${inviteLink}`,
    }

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send({message: "Error sending email"});
        } else {
            console.log('Email sent: ' + info.response);
            res.send({message: "Success"});
        }
    });
});

app.listen(3001, () => {
    console.log('HTTPS Server running on port 443');
});



