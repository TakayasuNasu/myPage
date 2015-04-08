
var app = angular.module('i-nasu');

app.controller('indexController', ['$scope', '$location', '$anchorScroll', 'IndexService',
  function($scope, $location, $anchorScroll, IndexService) {
    $scope.index = {};

    $scope.index.contents     = IndexService.getContents();
    $scope.index.allStangings = IndexService.getAllStandings();

    $scope.index.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };

  }]);
