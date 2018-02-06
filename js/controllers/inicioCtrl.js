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
              "Bearer BQB3xmTIJ6YOTEpTYcleaPTg2etinoyOQu4V46BEcjHbGAN_iXz0-_knJtT1Z4x2tK8pjw_9tKTOpfyufmU",
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
  
    $scope.modalShown = false;
    $scope.modalShown2 = false;
    $scope.user = { name: "Javier", surname: "Molina", shortKey: "1111" };
    $scope.userMod = {};
    $scope.toggleModal = function() {
      $scope.modalShown = !$scope.modalShown;
    };
    $scope.toggleModal2 = function() {
      $scope.modalShown2 = !$scope.modalShown2;
    };
    $scope.saveUser = function(usr) {
      $scope.userMod = usr;
      $window.alert("Desde metodo SALVAR del controller fuera de la ventana: " + $scope.userMod.shortKey);
    };


}]);