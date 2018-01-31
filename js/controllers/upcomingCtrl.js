"use strict";
app.controller("UpcomingCtrl", function($scope, $http) {

    $scope.setActive("mUpcoming");

        // $scope.etiquetas = ["2006", "2007", "2008", "2009"];
        // $scope.series = ["Ventas", "Gastos"];

        // $scope.datos = [[65, 59, 80, 81], [28, 48, 40, 19]];

        $scope.etiquetas = ["2006", "2007", "2008", "2009","2008", "2009"];
        $scope.series = ["Popularity"];

        $scope.datos = [[65, 59, 80, 81, 77, 22]];        

});
