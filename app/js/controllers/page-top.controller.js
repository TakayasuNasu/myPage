
var app = angular.module('i-nasu');

app.controller('pageTopController', ['$scope', '$document',
  function($scope, $document) {
    $scope.pageTop = {};
    $scope.pageTop.isShow = false;
    $document.on('scroll', function() {
      $scope.pageTop.isShow = ($document.scrollTop() > 1000)? true: false;
      $scope.pageTop.scroll = $document.scrollTop();
    });

  }]);
