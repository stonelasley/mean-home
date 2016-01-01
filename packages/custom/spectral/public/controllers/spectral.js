'use strict';

/* jshint -W098 */
var Spectral = angular.module('mean.spectral');

Spectral.controller('SpectralController', ['$scope', 'Global', 'Spectral',
  function($scope, Global, Spectral) {
    $scope.global = Global;
    $scope.package = {
      name: 'spectral'
    };
  }
]);

Spectral.config(['$viewPathProvider', function ($viewPathProvider) {
  $viewPathProvider.override('system/views/header.html', 'spectral/views/header.html');
  $viewPathProvider.override('system/views/index.html', 'spectral/views/index.html');
}]);