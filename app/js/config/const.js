var app = angular.module('i-nasu');

app.constant('Const', {
  'baseApiUrlFootballData': '//api.football-data.org/v1/competitions',
  'baseApiUrlFootballTable': '//api.football-data.org/v1/competitions/',
  'baseApiUrlFlickr': '//api.flickr.com/',
  'authToken': '5579ab1665774b15a6e791e3ec2567c5',
  'Bundesliga': 452,
  'PremierLeague': 445,
  'Ligue1': 450,
  'SerieA': 456,
  'Liga': 455,
  'Eredivisie': 449,

  leagues: [
    {id: 452, name: 'Bundesliga'},
    {id: 445, name: 'PremierLeague'},
    {id: 450, name: 'Ligue1'},
    {id: 456, name: 'SerieA'},
    {id: 455, name: 'Liga'},
    {id: 449, name: 'Eredivisie'},
  ],

  links: [
    {title: "ブログ", url: "http://blog.i-nasu.com"},
    {title: "gitbucket", url: "https://git.i-nasu.com"},
    {title: "GitHub", url: "https://github.com/TakayasuNasu"},
    {title: "jenkins", url: "/jenkins"},
    {title: "gollum", url: "https://wiki.i-nasu.com"}
  ],

  portfolios: [
    {title: "伊藤喜三郎建築研究所", url: "http://k-ito.jp/"},
    {title: "かけはし", url: "http://kakehashi.japanasiagroup.jp/jag-portal/top/index"},
    {title: "戦国キングダム", url: "http://jp.product.gree.net/sengoku-kingdom/"},
    {title: "ひかりTV(オンデマンド)", url: "http://video.hikaritv.net/"},
  ]
});