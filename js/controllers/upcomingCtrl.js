"use strict";
app.controller("UpcomingCtrl", function($scope, $http, $base64) {

        $scope.setActive("mUpcoming");

        $scope.etiquetas1 = ["Año 2006", "Año 2007", "Año 2008", "Año 2009", "Año 2008", "Año 2009", "Año 2006", "Año 2007", "Año 2008", "Año 2009", "Año 2008", "Año 2009", "Año 2006", "Año 2007", "Año 2008", "Año 2009", "Año 2008", "Año 2009"];
        $scope.etiquetas2 = ["Año 2006", "Año 2006", "Año 2006", "Año 2006", "Año 2006", "Año 2006"];
        $scope.series = ["Popularity"];

        $scope.datos = [65, 59, 80, 81, 77, 22, 65, 59, 80, 81, 77, 22, 65, 59, 80, 81, 77, 22];        

        $scope.opciones = {
                            scales: {
                                xAxes: [{
                                    barThickness : 10
                                }]
                        }
        };

        $scope.opciones2 = {
                            scales: {
                                xAxes: [{
                                    barThickness : 10
                                }]
                            },
                            responsive: false   
        };


        $scope.update = function(e){
            console.log(e);
            console.log(e.currentTarget.id);//coger id
            console.log(e.currentTarget.outerHTML);
        };

        var canvas2 = angular.element(document.querySelector("#canvas2"));
        console.log(canvas2);

        var canvas2Data = $base64.encode(canvas2);
        $scope.canvas2DataURL = encodeURIComponent(canvas2Data);

        var myEl = angular.element(document.querySelector("#descargaPNG"));
        console.log(myEl);

        //<img alt="{{p.alt}}" data-ng-src="{{'data:image/png;base64,'+p.Photo}}" class="photo" />;
 


        $scope.profesores = {};
        $scope.tblProfesores = "parciales/tblProfesores.html";

        $http.get("profesores.json").success(function(data) {
            //Codigo cuando es correcta la petición
            $scope.profesores = data.profesores;
        });
        $scope.data23 = [{ firstName: "Javier", lastName: "Molina" }];
        var data2;
        var templateString = "<h1 class='azul'>#=firstName# #=lastName#</h1>";
        //var templateString = "<div>{{etiquetas2}}</div>";
        var templateFinal = kendo.template(templateString);

        //var result = kendo.render(templateFinal, data2);

        $scope.ExportPdf = function() {
            
            data2 = $scope.data23;
            console.log(data2);
            var result = kendo.render(templateFinal, data2);

            kendo.drawing
                .drawDOM(document.getElementById("principal"), {
                    forcePageBreak: ".page-break",
                    paperSize: "A4",
                    scale: 0.5,
                    height: 500,
                    template: result,
                    keepTogether: ".prevent-split"
                })
                .then(function(group) {
                    kendo.drawing.pdf.saveAs(group, "DOM.pdf");
                });
        };
});
