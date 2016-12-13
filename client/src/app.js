var makeGetRequest = require('./ajaxHelper');
var CountriesSelectView = require('./views/countriesSelectView');
var BucketedCountriesView = require('./views/bucketedCountriesView');

window.onload = function() {

  var countriesUrl = 'https://restcountries.eu/rest/v1/all';
  makeGetRequest( countriesUrl, function( countries ) {
    var countriesSelectView = new CountriesSelectView();
    countriesSelectView.populate( countries );
  });

  var bucketedCountriesUrl = "http://localhost:3000/bucketed-countries";
  makeGetRequest( bucketedCountriesUrl, function( bucketedCountries ) {
    var bucketedCountriesView = new BucketedCountriesView();
    bucketedCountriesView.populate( bucketedCountries );
  });
};
