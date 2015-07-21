var http = require('http');
var express = require('express');

var five = require('johnny-five');
var board = new five.Board();

var app = express();
var PORT = 3005;

var THRESHOLD = 18;

var DEBUG = false;

app.use(express.static(__dirname + '/public'));

board.on('ready', function() {
  var relay = new five.Relay(10);

  board.repl.inject({
    relay: relay
  });

  app.get('/on', function(req, res) {
    relay.on();
    return res.end();
  });

  app.get('/off', function(req, res) {
    relay.off();
    return res.end();
  });

  app.get('/toggle', function(req, res) {
    relay.toggle();
    return res.end();
  });

  app.listen(PORT, function() {
    console.log('LISTENING!');
  });

});
