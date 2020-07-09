// These are your accountSid and authToken from https://www.twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

// Make API calls here...

function sendSms(number, message) {
    return client.messages
        .create({
            body: message,
            from: process.env.TWILIO_NUMBER,
            to: number
        })
        .then(message => {
            console.log(message.sid)
            return message
        })
        .then(message => message)
        .catch(
            err => console.error(err)
        )
}

function sendMultiSms(numbers, message) {
    let sequence = Promise.resolve([]);
    // Loop over each file, and add on a promise to the
    // end of the 'sequence' promise.
    numbers.forEach(number => {

        // Chain one computation onto the sequence
        sequence =
            sequence
                .then(resultsArray => {
                    return sendSms(number, message)
                        .then(result => {
                            resultsArray.push(result)
                            return resultsArray
                        })
                })
        // Resolves for each file, one at a time.
    })
    // This will resolve after the entire chain is resolved
    return sequence;
}



module.exports = { sendSms, sendMultiSms }