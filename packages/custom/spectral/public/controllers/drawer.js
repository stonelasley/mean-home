'use strict';

var Spectral = angular.module('mean.spectral')

Spectral.run(function($rootScope) {
  document.addEventListener("keyup", function(e) {
    if (e.keyCode === 27)
      $rootScope.$broadcast("escapePressed", e.target);
  });

  document.addEventListener("click", function(e) {
    $rootScope.$broadcast("documentClicked", e.target);
  });
});

Spectral.controller("DrawerController", function($scope, $rootScope) {
  $scope.leftVisible = false;
  $scope.rightVisible = false;

  $scope.close = function() {
    $scope.leftVisible = false;
    $scope.rightVisible = false;
  };

  $scope.showRight = function(e) {;
    $scope.rightVisible = true;
    e.stopPropagation();
  }

  $rootScope.$on("documentClicked", _close);
  $rootScope.$on("escapePressed", _close);

  function _close() {
    $scope.$apply(function() {
      $scope.close();
    });
  }
});

