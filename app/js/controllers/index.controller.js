
var app = angular.module('i-nasu');

app.controller('indexController', ['$scope', 'IndexService',
  function($scope, IndexService) {
    $scope.index = {};

    $scope.index.contents     = IndexService.getContents();
    $scope.index.allStangings = IndexService.getAllStandings();

  }]);
