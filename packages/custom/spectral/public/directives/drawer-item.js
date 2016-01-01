/**
 * Created by stone on 12/31/15.
 */
var Spectral = angular.module('mean.spectral');

Spectral.directive("drawerItem", function() {
  return {
    restrict: "E",
    template: "<div ng-click='navigate()' ng-transclude></div>",
    transclude: true,
    scope: {
      hash: "@"
    },
    link: function($scope) {
      $scope.navigate = function() {
        window.location.hash = $scope.hash;
      }
    }
  }
});