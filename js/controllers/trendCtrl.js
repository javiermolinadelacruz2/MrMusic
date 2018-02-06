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
              "Bearer BQAxEQBB2YAaHrOUkbxIO0ZmyCywNmMFg583m7aixsKMOUJjOzzMW-DdHQtgbvJ6oxCY9IOnmKDFExAroUE",
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

