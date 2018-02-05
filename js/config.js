
app.config(function($stateProvider, $urlRouterProvider) {
 

  $stateProvider
    .state("home", {
      url: "index",
      templateUrl: "parciales/home.html",
      controller: "inicioCtrl"
	})
	
    .state("trend", {
      url: "trend",
      templateUrl: "parciales/trend.html",
      controller: "trendCtrl"
    })

    .state("upcoming", {
      url: "upcoming",
      templateUrl: "parciales/upcoming.html",
      controller: "UpcomingCtrl"
    });

     //$urlRouterProvider.otherwise("home");
});


