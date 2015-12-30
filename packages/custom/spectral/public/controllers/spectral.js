'use strict';

/* jshint -W098 */
angular.module('mean.spectral').controller('SpectralController', ['$scope', 'Global', 'Spectral',
  function($scope, Global, Spectral) {
    $scope.global = Global;
    $scope.package = {
      name: 'spectral'
    };
  }
]);
