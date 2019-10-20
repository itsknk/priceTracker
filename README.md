## priceTracker
A simple price tracker that tracks a product price on Amazon(or can be any) and notifies via email when it's in the minimum price required.

## Installation
1. Required npm modules - dotenv, @sendgrid/mail, nightmare, node-cron.
2. A sendgrid account required and you need to generate a api key for your mail, follow this [video](https://www.youtube.com/watch?v=eGD0RjblgJ0) to generate an api key.
3. copy the api key and paste it in the .env file.
4. Change the email to your email in the function sendEmail.

## Usage
After finishing up the following neccesities you can just fire up the terminal and type ```node index.js url minPrice``` and this will take a 1-2 minutes to run and sends you the mail.
Here the URL should be of form ```https://www.amazon.in/gp/product/B07HGBMJT6``` i.e, remove ref part from the url.
In default it runs for every minute as the cron job is set to default, you can change this to whatever the day and how many times too... read the docs [here](https://www.npmjs.com/package/node-cron).

## LISCENSE
[MIT](https://github.com/itsknk/priceTracker/blob/master/LICENSE)
