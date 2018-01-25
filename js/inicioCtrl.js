app.controller('inicioCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mInicio");

	$scope.searchIn = "";
	var banderaPeticion = false;
	var search;

	var apiKey = "4293cdd4be6daa38f0b309d4539c0680"; 
	var path = "https://api.themoviedb.org/3/search/multi?api_key=" + apiKey + "&language=en-US&query=" + search +"&page=1&include_adult=false";
	$scope.urlMoviedbIMG = "http://image.tmdb.org/t/p/w500";
	$scope.urlMoviedbIMGNOPHOTO ="http://classifieds.thefencepost.com/public/images/no-photo.png";

	//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=star&page=1&include_adult=false
	
	function fetch() {
		console.log($scope.searchIn);
		console.log("before "+path);
		
		search = $scope.searchIn;

		if (banderaPeticion == true)
			search = "asdwwww";

		path = "https://api.themoviedb.org/3/search/multi?api_key=" + apiKey + "&language=en-US&query=" + search + "&page=1&include_adult=false";
		path = path.replace(/ /g, "&");
		console.log("after " +path);

		$http.get(path)
			.then(function (response) {
				//console.log($scope.search);
				//console.log($search);
				$scope.details = response.data.results;
				console.log($scope.details);

			});
	}

	$scope.$watch('searchIn', function (viejo, nuevo) {
		console.log("paso por watch");
		console.log($scope.searchIn);
		console.log("viejo" + viejo);
		console.log("nuevo" + nuevo);
		banderaPeticion = false;
		if (viejo == "" && nuevo != ""){
			banderaPeticion= true;
		}
		setTimeout(function () { fetch(); }, 1000);
		//fetch();
		
	});


}]);