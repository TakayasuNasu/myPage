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