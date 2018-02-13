(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController',  DIController);

DIController.$inject = ['$scope', '$filter'];
function DIController ($scope, $filter) {
  $scope.name = "Yaakov";
    $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    return "ho fame";
  };

  $scope.feedYaakov = function () {
      $scope.stateOfBeing = "fed";
  };

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

})();
