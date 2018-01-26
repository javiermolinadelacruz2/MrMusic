var app = angular.module("universidadApp", ["ngRoute", "ui.mask", "chart.js"]);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
	$scope.menuSuperior = 'parciales/menu.html';


	$scope.setActive = function(Opcion){

		$scope.mInicio     = "";
		$scope.mTrend      = "";
		$scope.mUpcoming   = "";

		$scope[Opcion] = "active";

	}

}]);

app.filter('telefono',function(){
	return function(numero){
		return numero.substring(0,4) +"-"+numero.substring(4);
	}
})
