'use strict';

angular.module('reservations.tennis_reservations', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tennis_reservations', {
    templateUrl: 'reservations/tennis_reservations.html',
    controller: 'tennisController'
  });
}])

.controller('tennisController', [function() {
console.log('tennis loaded');
}]);