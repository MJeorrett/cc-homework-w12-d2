var CountriesSelectView = function( onChangeDelegate ) {
  this.selectList = document.querySelector( '#countries-select' );
  this.selectList.onchange = function( ev ) {
    var selectedOption = ev.target.selectedOptions[0];
    var countryName = selectedOption.innerText;
    var countryCode = selectedOption.value;
    onChangeDelegate( countryName, countryCode );
  };
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
