'use strict';
app.controller('trendCtrl', function ($scope, $http) {


    $scope.setActive("mTrend");
    
    $scope.$watch('search', function () {
        searchArtist();
    });

    function searchArtist() {

        $http({
          method: "GET",
          url:
            "https://api.spotify.com/v1/search?query=martin&type=artist&limit=20",
          headers: {
            Authorization: "Bearer BQAgwor95Tp3WRGW_HyRg4491h1ZT35Fode9JnV54sa-UCzAJq5FLfwdtwAX2VXGn2hyA3SAK2ARCoThoeU",
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

    $scope.update = function (movie) {
        $scope.search = movie.Title;
    };

    $scope.select = function () {
        this.setSelectionRange(0, this.value.length);
    }
});