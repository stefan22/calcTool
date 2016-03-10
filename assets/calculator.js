(function() {

   var app = angular.module('myCalculator', []);

   app.controller('CalculatorController', ['$scope', function($scope) {

   		$scope.current_lumen = 600;
   		$scope.lumens_options = [375,600,900,1125,1600];
   		$scope.current_cost = 12;
   		$scope.current_hours = 3;
   		$scope.total_days = 365;

   		$scope.inc_conversion = .0625;
   		$scope.hal_conversion = .0450;
   		$scope.cfl_conversion = .0146;
   		$scope.led_conversion = .0125;

   		




   }]);


})();