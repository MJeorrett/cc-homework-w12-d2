var BucketedCountriesView = function() {
  this.bucketList = document.querySelector( '#bucket-list' );
};

BucketedCountriesView.prototype = {
  populate: function( bucketedCountries ) {
    bucketedCountries.forEach( function( bucketedCountry ) {
      var li = document.createElement( 'li' );
      li.innerText = bucketedCountry.name;
      this.bucketList.appendChild( li );
    }.bind( this ) );
  }
};

module.exports = BucketedCountriesView;
