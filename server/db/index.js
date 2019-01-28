/* Mongo Database
* - this is where we set up our connection to the mongo database

*/
const mongoose = require('mongoose')
MONGODB_URI = "test:testing1@ds163254.mlab.com:63254/project-3";
mongoose.connect(MONGODB_URI);

mongoose.connect(MONGODB_URI, () => {
	console.log(`Connected to Mongodb${MONGODB_URI}`);
})
var db = mongoose.connection;

module.exports = db
