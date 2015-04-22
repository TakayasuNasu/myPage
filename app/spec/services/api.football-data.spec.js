
describe('FootballDataのテスト', function () {

  beforeEach(module('i-nasu'));

  var httpBackend;
  beforeEach(inject(function ($httpBackend) {
    httpBackend = $httpBackend;
  }));

  it('試合結果を取得するテスト', inject(function(FootballData, Const) {
    httpBackend.expectGET(Const.baseApiUrlFootballData + 'soccerseasons/354/fixtures/?timeFrame=p14',
      {
        'X-Auth-Token': Const.authToken,"Accept":"application/json, text/plain, */*"
      }).respond(200, []);

    FootballData.load();
    httpBackend.flush();
  }));

  it('順位を取得するテスト', inject(function(FootballData, Const) {
    var PremierLeague = Const.leagues[1];
    httpBackend.expectGET(Const.baseApiUrlFootballTable + 'soccerseasons/' + PremierLeague.id + '/leagueTable',
    {
      'X-Auth-Token': Const.authToken,"Accept":"application/json, text/plain, */*"
    }).respond(200, {});

    FootballData.getLeagueStandings(PremierLeague.id);
    httpBackend.flush();
  }));

});
