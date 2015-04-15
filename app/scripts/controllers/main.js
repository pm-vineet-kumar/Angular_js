'use strict';

/**
 * @ngdoc function
 * @name secondProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the secondProjectApp
 */
angular.module('secondProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
