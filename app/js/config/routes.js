var app = angular.module('i-nasu');

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider
    .state("index", {
      "url": "^/",
      "templateUrl": "views/index/index.html",
      "controller": "indexController"
    });
  }]);