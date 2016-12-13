var CountriesSelectView = function() {
  this.selectList = document.querySelector( '#countries-select' );
};

CountriesSelectView.prototype = {
  populate: function( countriesData ) {
    countriesData.forEach( function( countryData ) {
      var option = document.createElement( 'option' );
      option.innerText = countryData.name;
      option.value = countryData.alpha3Code;
      this.selectList.appendChild( option );
    }.bind( this ) );
  }
};

module.exports = CountriesSelectView;
