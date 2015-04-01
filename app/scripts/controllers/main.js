'use strict';

/**
 * @ngdoc function
 * @name ratenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ratenApp
 */
angular.module('ratenApp')
  .controller('MainCtrl', function ($scope) {
    $scope.initializeGame = function() {
    	$scope.numTries = 0;
    	$scope.original = Math.floor((Math.random() * 100) + 1);
    	$scope.guess = null;
    	$scope.deviation = null;
    }
    $scope.initializeGame();

    $scope.verifyGuess = function() {
    	$scope.deviation = $scope.original - $scope.guess;
    	$scope.numTries = $scope.numTries + 1;
    }
  });
