var app = angular.module('i-nasu');

app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state("index", {
      "url": "^/",
      "templateUrl": "views/index/index.html",
      "controller": "indexController"
    });
  }]);