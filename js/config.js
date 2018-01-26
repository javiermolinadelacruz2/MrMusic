app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'parciales/home.html',
			controller: 'inicioCtrl'
		})
		.when('/trend', {
			templateUrl: 'parciales/trend.html',
			controller: 'trendCtrl'
		})
		.when('/upcoming', {
			templateUrl: 'parciales/upcoming.html',
			controller: 'UpcomingCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});