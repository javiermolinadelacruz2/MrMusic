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

        $scope.update = function(e){
            console.log(e);
            console.log(e.currentTarget.id);//coger id
            console.log(e.currentTarget.outerHTML);
        };
// $scope.descargar = function(ev) {

//       if (canvas2.msToBlob) {
//         var blob = canvas2.msToBlob();
//         window.navigator.msSaveBlob(blob, 'canvas.png');
//       }else{
//         link.href = canvas2.toDataURL();
//         link.download = "canvas.png";
//       }
//     };
});
