"use strict";
app.controller("UpcomingCtrl", function($scope, $http, $base64) {

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

        
        var docDefinition = { content: "This is an sample PDF printed with pdfMake" };

        $scope.update = function(e){
            console.log(e);
            console.log(e.currentTarget.id);//coger id
            console.log(e.currentTarget.outerHTML);
        };

       // var enlace = angular.element(document.querySelector("#descargaPNG"));
        var canvas2 = angular.element("#canvas2");
        
        console.log(canvas2);


        var canvas2Data = $base64.encode(canvas2);
        $scope.canvas2DataURL = encodeURIComponent(canvas2Data);

        var myEl = angular.element(document.querySelector("#descargaPNG"));
        console.log(myEl);

        //<img alt="{{p.alt}}" data-ng-src="{{'data:image/png;base64,'+p.Photo}}" class="photo" />;


});
