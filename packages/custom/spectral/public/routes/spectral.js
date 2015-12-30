'use strict';

angular.module('mean.spectral').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('spectral example page', {
      url: '/spectral/example',
      templateUrl: 'spectral/views/index.html'
    });
  }
]);
