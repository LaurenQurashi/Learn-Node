const mongoose = require('mongoose');

// import environmental variables from our variables.env file.
// variables.env is where you store all your secret stuff. This file shouldn't be included in your github repo.

require('dotenv').config({ path: 'variables.env' });

//dotenv is a package that allows us to take anything in our variables.env file, and access it via process.env.nameOfVariable.

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE);
// this is an example of how dotenv is useful. If we were using a production db, our variables would be different. This way, it's connecting to the 
//database variable in the env file. We might have a production one on the server or a test one, so whatever that points to it'll connect to it with
//the same code here. 
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});
// The above basically handles an error. It'll log these emojis and then print our connection error onto the console. 

// READY?! Let's go!


// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
