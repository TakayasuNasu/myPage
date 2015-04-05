var app = angular.module('i-nasu');

app.constant('Const', {
  'baseApiUrlFootballData': 'http://www.football-data.org/',
  'baseApiUrlFootballTable': 'http://api.football-data.org/alpha/',
  'baseApiUrlFlickr': 'http://api.flickr.com/',
  'authToken': '5579ab1665774b15a6e791e3ec2567c5',
  'Bundesliga': 351,
  'PremierLeague': 354,
  'Ligue1': 355,
  'SerieA': 357,
  'Liga': 358,
  'Eredivisie': 360,

  leagues: [
    {id: 351, name: 'Bundesliga'},
    {id: 354, name: 'PremierLeague'},
    {id: 355, name: 'Ligue1'},
    {id: 357, name: 'SerieA'},
    {id: 358, name: 'Liga'},
    {id: 360, name: 'Eredivisie'},
  ]
});