'use strict';

/**
 * @ngdoc function
 * @name secondProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the secondProjectApp
 */
angular.module('secondProjectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.repeatData = [1,2,3,4,5,6,7];
  });
