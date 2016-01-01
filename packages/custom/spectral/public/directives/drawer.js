var Spectral = angular.module('mean.spectral');

Spectral.directive("drawer", function() {
  return {
    restrict: "E",
    template: "<div ng-class='{ show: visible, left: alignment === \"left\", right: alignment === \"right\" }' ng-transclude></div>",
    transclude: true,
    scope: {
      visible: "=",
      alignment: "@"
    }
  };
});
