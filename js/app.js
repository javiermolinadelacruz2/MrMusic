var app = angular.module("universidadApp", [
  "ui.mask",
  "chart.js",
  "ui.router",
  "base64"
]);

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
