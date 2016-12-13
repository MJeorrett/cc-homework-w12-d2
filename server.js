var express = require('express');
var path = require('path');
var dbHelper = require('./dbHelper');
var bodyParse = require('body-parser');

var app = express();
app.use( express.static( 'client/build' ) );
app.use( bodyParse.json() );

app.get( '/', function( req, res ) {
  res.sendFile( path.join( __dirname + '/client/build/index.html' ) );
});

app.get( '/bucketed-countries', function( req, res ) {
  dbHelper.getAllWhere( 'bucketedCountries', null, function( countries ) {
    res.json( countries );
  });
});

app.post( '/bucketed-countries', function( req, res ) {
  dbHelper.insertInto( 'bucketedCountries', req.body, function() {
    res.status( 200 ).end();
  });
});

var server = app.listen( 3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log( "bucketList is listening on %s:%s", host, port );
});
