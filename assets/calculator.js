(function() {

	var app = angular.module('myCalculator', []);

	app.controller('CalculatorController',['$scope', function($scope) {
		$scope.lumen_options = [375, 600, 900, 1125, 1600];
		$scope.current_lumens = 600;
		

	}]);



})();