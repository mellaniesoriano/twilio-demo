const express = require('express');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const app = express();

const accountSid = 'replace-with-your-account-sid';
const authToken = 'replace-with-your-auth-token';
const client = require('twilio')(accountSid, authToken);

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/', (req, res) => {
	client.messages.create({
			to: 'phone-number-must-be-registered-on-twilio',
			from: 'phone-number-must-be-generated-by-twilio',
			body: `https://www.google.com/maps/search/?api=1&query=${
				req.body.latitude
			},${req.body.longitude}`
		},
		(err, messages) => {
			if (err) {
				console.log(err);
			} else {
				console.log(client.messages);
			}
		}
	);
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});