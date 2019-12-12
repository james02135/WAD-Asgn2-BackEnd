

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8080;
// const loadUsers = require('./userData');
// const usersRouter = require('./users/index');
// const passport = require("passport");
// const Auth = require('./auth');


app.use(cors()); 

//app.use('/server/users', usersRouter);

// initialise passport​
//app.use(passport.initialize());

// Add passport.authenticate(..)  to middleware stack for protected routes​
//app.use('/server/routes.js', passport.authenticate('jwt', {session: false}));

// Populate DB with sample data
// if (process.env.seedDb) {
//     loadUsers();
// }

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);
// const dbRoute = "mongodb+srv://20079103:Beedo02135@my-cluster-3l9ay.mongodb.net/test?retryWrites=true&w=majority";
const dbRoute = "mongodb://localhost/beers";

mongoose.connect(dbRoute, { useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false });


let db = mongoose.connection;


// prints to the console once connected to DB
db.once('open', () => {
    console.log('connected to database')
});

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// append /api for our http requests
app.use('/api', router);

app.listen(port, function() {
    console.log("listening on port 8080");
});




