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


   		$scope.calculate = function() {
   			
			$scope.inc_wattage = ($scope.current_lumen * $scope.inc_conversion).toFixed(1); 
			$scope.hal_wattage = ($scope.current_lumen * $scope.hal_conversion).toFixed(1);
			$scope.cfl_wattage = ($scope.current_lumen * $scope.cfl_conversion).toFixed(1);
			$scope.led_wattage = ($scope.current_lumen * $scope.led_conversion).toFixed(1);  			


   		}

   		
   		$scope.calculate();

   		



   }]);


})();