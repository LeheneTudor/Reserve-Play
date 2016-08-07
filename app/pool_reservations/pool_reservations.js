'use strict';

angular.module('reservations.pool_reservations', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pool_reservations', {
    templateUrl: 'pool_reservations/pool_reservations.html',
    controller: 'poolController'
  });
}])

.controller('poolController', ['$scope','$firebaseArray',function($scope) {
	var ref = new Firebase('https://reserveandplay.firebaseio.com
')
$scope.pool_reservations = $firebaseArray(ref);
}]);