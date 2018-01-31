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
            Authorization:
              "Bearer BQDPY1Ioiwgduggj2xPVj_tPxtg_7KByPtFyG6tfhvFR_rueKsqUYBr1h6BkOznKsolBIWpWDGWNYb8i7R4",
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

});