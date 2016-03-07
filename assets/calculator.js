(function() {

   var app = angular.module('myCalculator', []);

   app.controller('CalculatorController', ['$scope', function($scope) {

   		$scope.current_lumen = 600;

   		$scope.lumens_options = [375,600,900,1125,1600];


   }]);


})();