(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController',  DIController)
.filter('loves', LovesFilter);

DIController.$inject = ['$scope', '$filter', 'lovesFilter'];
function DIController ($scope, $filter, lovesFilter) {
  $scope.name = "Yaakov";
    $scope.stateOfBeing = "hungry";
    $scope.cookieCost = .45;

  $scope.sayMessage = function () {
    var msg = "likes";
    var output = $filter('uppercase')(msg);
    return output;
  };

  $scope.sayLovesMessage = function () {
    var msg = "likes";
    msg = lovesFilter(msg);
    return msg;
  };

  $scope.feedYaakov = function () {
      $scope.stateOfBeing = "fed";
  };

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

function LovesFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  };
}

})();
