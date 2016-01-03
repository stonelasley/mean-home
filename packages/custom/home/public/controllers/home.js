'use strict';

/* jshint -W098 */
angular.module('mean.home').controller('HomeController', ['$scope', 'Global', 'Home',
  function($scope, Global, Home) {
    $scope.global = Global;
    $scope.package = {
      name: 'home'
    };
  }
]).config(['$viewPathProvider', function ($viewPathProvider) {
  $viewPathProvider.override('system/views/header.html', 'home/views/header.html');
  $viewPathProvider.override('system/views/index.html', 'home/views/index.html');
}]);