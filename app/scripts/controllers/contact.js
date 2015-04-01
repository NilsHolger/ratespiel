'use strict';

/**
 * @ngdoc function
 * @name ratenApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the ratenApp
 */
angular.module('ratenApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.geileSachen = [
      'Siegen',
      'Code',
      'Gerechtigkeit'
    ];
  });
