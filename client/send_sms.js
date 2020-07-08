// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
// Download the Node helper library from twilio.com/docs/node/install
// These are your accountSid and authToken from https://www.twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

// Make API calls here...

client.messages
    .create({
        body: 'Help I\'ve fallen and I can\'t get up from Bob\'s Biker Bar',
        from: '+16782934371',
        to: '+14077098738'
    })
    .then(message => console.log(message.sid));
