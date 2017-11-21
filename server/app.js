const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../models').db;

app.set('view engine', 'html');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '../public')));
app.use(express.static(path.join(__dirname + '../node_modules')));

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next) {
	console.error(err);
	res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

// listen on a port
var port = 3000;
app.listen(port, function() {
  console.log("The server is listening closely on port", port);
  db
    .sync()
    .then(function() {
      console.log("Synchronated the database");
    })
    .catch(function(err) {
      console.error("Trouble right here in River City", err, err.stack);
    });
});