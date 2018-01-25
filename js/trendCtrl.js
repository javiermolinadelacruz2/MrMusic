'use strict';
app.controller('trendCtrl', function ($scope, $http) {

    $scope.setActive("mTrend");
    
    $scope.$watch('search', function () {
        searchArtist();
        //getNewToken();
    });

    var urlMoviedb = "https://api.themoviedb.org/3";
    var apiKey = "4293cdd4be6daa38f0b30 9d4539c0680";
    var path = urlMoviedb + "/discover/movie?sort_by=popularity.desc&api_key=" + apiKey + "&language=es";
    $scope.urlMoviedbIMG = "http://image.tmdb.org/t/p/w500";


    function searchArtist() {
        /*$http.get(path)
            .then(function (response) {
                $scope.details = response.data.results;
                //console.log($scope.details);

            });*/

        $http({
          method: "GET",
          url:
            "https://api.spotify.com/v1/search?query=martin&type=artist&limit=20",
          headers: {
            Authorization: "Bearer BQAylASaDuvKu8l1iIDbhons-hj4XYXHSCOPaUQFHvkLgMx_8jWQngq7_gve3tMS_3bo2PtJA5Qb49HIa0s",
            Accept: "application/json"
          }
        }).then(function(response) {
          if (response.data == "ok") {
            // success
            console.log(response);
          } else {
            // failed
            console.log(response);
          }
        });
    }
/*
    function getNewToken(){

                $http({
                  method: "POST",
                  url: "https://accounts.spotify.com/api/token",
                  headers: {
                    grant_type: "client_credentials",
                    client_id: "d43ee6df035347a7a39576d55359d123",
                    client_secret: "75083826e7884ccfabe9cb02544a4bd6",
                  }
                }).then(function(response) {
                  if (response.data == "ok") {
                    // success
                    console.log(response);
                  } else {
                    // failed
                    console.log(response);
                  }
                });

    }*/

    $scope.update = function (movie) {
        $scope.search = movie.Title;
    };

    $scope.select = function () {
        this.setSelectionRange(0, this.value.length);
    }
});