'use strict';

// Declare app level module which depends on views, and components
angular.module('reservations', [
  'ngRoute',
  'firebase',
  'reservations.pool_reservations',
  'reservations.tennis_reservations'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/pool_reservations'});
}]);
