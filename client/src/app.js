var ajaxHelper = require('./ajaxHelper');
var CountriesSelectView = require('./views/countriesSelectView');
var BucketedCountriesView = require('./views/bucketedCountriesView');

window.onload = function() {

  var countriesUrl = 'https://restcountries.eu/rest/v1/all';
  ajaxHelper.makeGetRequest( countriesUrl, function( countries ) {
    var countriesSelectView = new CountriesSelectView( countrySelected );
    countriesSelectView.populate( countries );
  });

  var bucketedCountriesUrl = "http://localhost:3000/bucketed-countries";
  ajaxHelper.makeGetRequest( bucketedCountriesUrl, function( bucketedCountries ) {
    var bucketedCountriesView = new BucketedCountriesView();
    bucketedCountriesView.populate( bucketedCountries );
  });
};

var countrySelected = function( countryName, countryCode ) {
  var postCountryUrl = "http://localhost:3000/bucketed-countries";
  var countryData = {
    name: countryName,
    alpha3Code: countryCode
  };
  ajaxHelper.makePostRequest( postCountryUrl, countryData, function() {
    console.log( "country saved:", countryData );
  });
};
