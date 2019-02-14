// Loading evnironmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const cron = require("node-cron");
const dbConnection = require('./db'); // loads our connection to the mongo database
var db = require("./db/models");
const passport = require('./passport');
var fetchPetition = require("./controllers/fetchPet");
var fetchEvent = require("./controllers/fetchEv");
var charityPopulator = require("./scripts/charityOrg");
const app = express()
const PORT = process.env.PORT || 8080

// ===== Middleware ====
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser

if (process.env.NODE_ENV === 'production') {
	console.log('YOU ARE IN THE PRODUCTION ENV')

	app.use(express.static("build"));
}
// Here we go
/* Express app ROUTING */
app.use('/auth', require('./auth'))

// Require our routes
var routes = require("./routes");
app.use(routes);

// ====== Error handler ====
app.use(function (err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})

// ==== Starting Server =====
app.listen(PORT, () => {
	// db.Charity.remove({}, function (err) {
	// 	console.log("collection 'Charity' removed");
	// });
	// charityPopulator();

	// // cron.schedule("*/30 * * * * *", function(){
	console.log("Listening on port: " + PORT);

	// db.Petition.remove({}, function (err) {
	// 	console.log("collection 'Petition' removed");
	// });
	// db.Event.remove({}, function (err) {
	// 	console.log("collection 'Event' removed");
	// });

	// //charityPopulator();
	// fetchPetition.scrapePetitions();
	// fetchEvent.scrapeEvents();
	// //console.log(`These are the scrape events` + fetchEvent.scrapeEvents());
	// //console.log(`These are the scrape events ${fetchEvent.scrapeEvents()}`);
	// // }); //end of node-cron job
})
