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
              "Bearer BQDcFcH8CstphHpvzERmx_jwQCy5mrYIhNG_Z_kcvQNxAc6FRFGcoTLqN4WTV3y-t4QiQs4jd7B55N2I44Q",
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