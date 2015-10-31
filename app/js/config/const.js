var app = angular.module('i-nasu');

app.constant('Const', {
  'baseApiUrlFootballData': 'http://www.football-data.org/',
  'baseApiUrlFootballTable': 'http://api.football-data.org/alpha/',
  'baseApiUrlFlickr': 'http://api.flickr.com/',
  'authToken': '5579ab1665774b15a6e791e3ec2567c5',
  'Bundesliga': 394,
  'PremierLeague': 398,
  'Ligue1': 396,
  'SerieA': 401,
  'Liga': 399,
  'Eredivisie': 404,

  leagues: [
    {id: 394, name: 'Bundesliga'},
    {id: 398, name: 'PremierLeague'},
    {id: 396, name: 'Ligue1'},
    {id: 401, name: 'SerieA'},
    {id: 399, name: 'Liga'},
    {id: 404, name: 'Eredivisie'},
  ],

  links: [
    {title: "ブログ", url: "http://blog.i-nasu.com"},
    {title: "gitbucket", url: "/gitbucket"},
    {title: "GitHub", url: "https://github.com/TakayasuNasu"},
    {title: "jenkins", url: "/jenkins"},
    {title: "gollum", url: "/wiki"}
  ],

  portfolios: [
    {title: "伊藤喜三郎建築研究所", url: "http://k-ito.jp/"},
    {title: "かけはし", url: "http://kakehashi.japanasiagroup.jp/jag-portal/top/index"},
    {title: "戦国キングダム", url: "http://jp.product.gree.net/sengoku-kingdom/"},
    {title: "ひかりTV(オンデマンド)", url: "http://video.hikaritv.net/"},
  ]
});