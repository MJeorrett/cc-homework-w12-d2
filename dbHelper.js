var MongoClient = require('mongodb').MongoClient;

var dbHelper = {
  connect: function( callback ) {
    var url = 'mongodb://localhost:27017/countriesBucketList';
    MongoClient.connect( url, function( err, db ) {
      if ( err ) {
        console.error( err );
      }
      else {
        callback( db );
      }
      db.close();
    });
  },
  getAllWhere: function( collectionName, filter, callback ) {
    this.connect( function( db ) {
      var collection = db.collection( collectionName );
      if ( !filter ) filter = {};
      collection.find( filter ).toArray( function( err, data ) {
        if ( err ) {
          console.error( err );
        }
        else {
          callback( data );
        }

      });
    });
  }
};

module.exports = dbHelper;
