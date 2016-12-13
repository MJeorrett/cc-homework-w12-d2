var ajaxHelper = {
  makeGetRequest: function( url, callback ) {
    var request = new XMLHttpRequest();
    request.open( 'GET', url );
    request.onload = function() {
      if ( this.status == 200 ) {
        callback( JSON.parse( this.responseText ) );
      } else {
        console.log( "Request failed with status ", this.status );
      }
    };
    request.send();
  },
  makePostRequest: function( url, data, callback ) {
    var request = new XMLHttpRequest();
    request.open( 'POST', url );
    request.setRequestHeader( 'Content-Type', 'application/json' );
    request.onload = function() {
      if ( this.status == 200 ) {
        if ( callback ) callback();
      }
      else {
        console.error( "request failed with status", this.status );
      }
    }
    request.send( JSON.stringify( data ) );
  }
};

module.exports = ajaxHelper;
