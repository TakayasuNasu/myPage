
var app = angular.module('i-nasu');

app.factory('FlickrPhotos', ['$resource', 'Const',
  function($resource, Const) {
    return $resource(Const.baseApiUrlFlickr + 'services/feeds/photos_public.gne',
    {
      format: 'json',
      jsoncallback: 'JSON_CALLBACK'
    },
    {
      'load': { 'method': 'JSONP' }
    });
  }]);
