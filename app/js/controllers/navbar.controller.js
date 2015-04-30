
var app = angular.module('i-nasu');

app.controller('navbarController', ['$scope', 'Const',
  function($scope, Const) {
    $scope.navbar           = {};
    $scope.navbar.links     = Const.links;
    $scope.navbar.portfolios = Const.portfolios;
  }]);
