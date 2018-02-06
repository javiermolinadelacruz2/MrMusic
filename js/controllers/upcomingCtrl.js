"use strict";
app.controller("UpcomingCtrl", function($scope, $http) {

    $scope.setActive("mUpcoming");

        $scope.etiquetas1 = ["Año 2006", "Año 2007", "Año 2008", "Año 2009", "Año 2008", "Año 2009"];
        $scope.etiquetas2 = ["Año 2006", "Año 2006", "Año 2006", "Año 2006", "Año 2006", "Año 2006"];
        $scope.series = ["Popularity"];

        $scope.datos = [[65, 59, 80, 81, 77, 22]];        

        $scope.opciones = {
                            scales: {
                                xAxes: [{
                                    barThickness : 10
                                }]
                        }
        }

        $scope.opciones2 = {
                            scales: {
                                xAxes: [{
                                    barThickness : 10
                                }]
                            },
                            responsive: false   
        }
});
