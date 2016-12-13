var makeGetRequest = require('./ajaxHelper');
var CountriesSelectView = require('./views/countriesSelectView');

window.onload = function() {

  var countriesUrl = 'https://restcountries.eu/rest/v1/all';
  var countries = makeGetRequest( countriesUrl, function( countries ) {
    var countriesSelectView = new CountriesSelectView();
    countriesSelectView.populate( countries );
  });
};
