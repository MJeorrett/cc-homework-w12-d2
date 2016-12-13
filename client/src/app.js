var ajaxHelper = require('./ajaxHelper');
var CountriesSelectView = require('./views/countriesSelectView');
var BucketedCountriesView = require('./views/bucketedCountriesView');

var countriesUrl = 'https://restcountries.eu/rest/v1/all';
var bucketedCountriesUrl = "http://localhost:3000/bucketed-countries";
var postCountryUrl = "http://localhost:3000/bucketed-countries";

var bucketedCountries;
var bucketedCountriesView;
var countriesSelectView;

var setUpCountriesSelect = function() {
  ajaxHelper.makeGetRequest( countriesUrl, function( countries ) {
    countriesSelectView = new CountriesSelectView( countrySelected );
    countriesSelectView.populate( countries );
  });
};

var setUpBucketedCountriesList = function() {
  ajaxHelper.makeGetRequest( bucketedCountriesUrl, function( response ) {
    bucketedCountries = response;
    bucketedCountriesView = new BucketedCountriesView();
    bucketedCountriesView.refresh( bucketedCountries );
  });
};

var countrySelected = function( countryName, countryCode ) {
  var country = {
    name: countryName,
    alpha3Code: countryCode
  };

  bucketedCountries.push( country );
  bucketedCountriesView.refresh( bucketedCountries );
  saveCountry( country );
};

var saveCountry = function( country ) {
  ajaxHelper.makePostRequest( postCountryUrl, country, function() {
    console.log( "country saved:", country );
  });
};

window.onload = function() {
  setUpCountriesSelect();
  setUpBucketedCountriesList();
};
