require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const nightmare = require('nightmare')()
const cron = require('node-cron')
const args = process.argv.slice(2)
const url = args[0]
const minPrice = args[1]

cron.schedule('* * * * *', (checkPrice) => {
  console.log('running a task every minute');
});

async function checkPrice() {
  try {
    const priceString = await nightmare.goto(url)
                                       .wait("#priceblock_ourprice")
                                       .evaluate(() => document.getElementById("priceblock_ourprice").innerText)
                                       .end()
    const priceNumber = parseFloat(priceString.replace('₹', ''))
    if (priceNumber < minPrice) {
      await sendEmail(
        'Price is Low',
        `The price on ${url} has dropped below ${minPrice}`
      )
    }
  } catch (e) {
    await sendEmail('Amazon Price Checker Error', e.message)
    throw e
  }
}
//sends the mail
function sendEmail(subject, body) {
  const email = {
    to: 'nepadeda@webmaild.net',
    from: 'amazon-price-checker@example.com',
    subject: subject,
    text: body,
    html: body
  }

  return sgMail.send(email)
}
