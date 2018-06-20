const express = require('express');
const app = express();
const mailer = require('nodemailer');

require('dotenv').config();

const USERNAME = process.env.USERNAME;
const PASS = process.env.PASS;

// let transporter = mailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: USERNAME,
//     pass: PASS
//   }
// });

// let email = {
//   from: "New Lead <contact@delaegis.com>",
//   to: "<janellealexander12@gmail.com>",
//   subject: "Hello",
//   text: "...world",
//   html: "<h1>...world</h1>",
//   disableFileAccess: true
// };

// transporter.sendMail(email, (error, info) => {
//   if (error) { return console.log(error);} else {
//     console.log(`Message sent: ${info.messageId}`);
//   }
// });

//middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.post('/contact', (request, response) => {
  let lead = request.body;
  response.send("I got your lead data");
});

app.listen(5000, () => console.log("this server is listening on port 5000"));