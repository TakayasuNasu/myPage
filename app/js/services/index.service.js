
var app = angular.module('i-nasu');

app.factory('IndexService', ['Const', 'FootballData', 'FlickrPhotos',
  function(Const, FootballData, FlickrPhotos) {
    var results = FootballData.load();
    var photos  = FlickrPhotos.load({tags: 'Manchester United'});

    return {

      getContents: function() {
        var returnContents = [];
        results.$promise.then(function(resultList) {
          angular.forEach(resultList, function(result, key) {
            result.image = photos.items[key].media.m;
            returnContents.push(result);
          });
        });
        return returnContents;
      },

      getAllStandings: function() {
        var result = [];
        angular.forEach(Const.leagues, function(league) {
          var stangings = {};
          stangings.result = FootballData.getLeagueStandings(league.id);
          stangings.name = league.name;
          result.push(stangings);
        });
        return result;
      }

    };
  }]);
