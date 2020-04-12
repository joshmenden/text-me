require('dotenv').config()
const argv = require('yargs').argv
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioPhoneNumber = process.env.TWILIO_NUMBER

const client = require('twilio')(accountSid, authToken)

function sendMessage(message, to) {
  client.messages.create(
    {
      to: to,
      from: twilioPhoneNumber,
      body: message,
    },
    (err, message) => {
      if (err) {
        console.log('Oh no! We couldn\'t send this message! Here\'s the error from twilio: ${err}')
      } else {
        console.log('Message sent succesfully!')
      }
    }
  )
}

const message = argv.message
const toNumber = argv.phonenumber

sendMessage(message, toNumber)