app.controller('inicioCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mInicio");

	$scope.searchIn = "";
	var banderaPeticion = false;
	var search;

	var path;
	$scope.detailsPhoto;
	$scope.fotoDefecto = "http://valmy.com/clubvalmy/wp-content/plugins/smg-theme-tools/public/images/not-available-es.png";


	function searchArtist() {

		search = $scope.searchIn;
		if (banderaPeticion == true)
			 search = "asdwwww";
			 
		path = "https://api.spotify.com/v1/search?query=" + search + "&type=artist&limit=20";
		path = path.replace(/ /g,"&");

        $http({
          method: "GET",
          url: path,
          headers: {
            Authorization:
              "Bearer BQDPY1Ioiwgduggj2xPVj_tPxtg_7KByPtFyG6tfhvFR_rueKsqUYBr1h6BkOznKsolBIWpWDGWNYb8i7R4",
            Accept: "application/json"
          }
        }).then(function(response) {
          if (response.statusText == "OK") {
            $scope.details = response.data.artists.items;
            console.log($scope.details);
            console.log("REQUEST OK");
          } else {
            // failed
            console.log("ERROOOOOOOOOOOOOOOOOOR");
            console.log(response);
          }
        });
      }

	$scope.$watch('searchIn', function (viejo, nuevo) {

		banderaPeticion = false;

		if (viejo == "" && nuevo != ""){
			banderaPeticion= true;
		}
		setTimeout(function () { searchArtist(); }, 0);
		//fetch();
		
	});

	$scope.normalDialog = function() {
      ngDialog.open({
        template: "../../parciales/template1.html",
        className: "ngdialog-theme-default",
        scope: $scope
      });
    };


}]);