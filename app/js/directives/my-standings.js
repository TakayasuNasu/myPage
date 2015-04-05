var app = angular.module('i-nasu');

app.directive('myStangings', function() {
  return {
    templateUrl: 'views/components/standings.html',
    scope: {
      standings: '='
    }
  };
});