
var app = angular.module('i-nasu');

app.factory('FootballData', ['$resource', 'Const',
  function($resource, Const) {
    var footballResult = $resource(Const.baseApiUrlFootballData + 'soccerseasons/354/fixtures/?timeFrame=p14',
      {},
      {
        'load':{
          'method': 'GET',
          isArray: true,
          headers: {'X-Auth-Token': Const.authToken}
        }
      });

    return {

      load: function() {
        return footballResult.load();
      },

      getLeagueStandings: function(leaguId) {
        var league = $resource(Const.baseApiUrlFootballTable + 'soccerseasons/' + leaguId + '/leagueTable',
          {},
          {
            'get':{
              'method': 'GET',
              isArray: false,
              headers: {'X-Auth-Token': Const.authToken}
            }
          });
        return league.get();
      }

    };
  }]);