
angular.module('app', ['ngRoute']);

angular.module('app').config(['$routeProvider', function($routeProvider) {

	// app url routing
	$routeProvider.when("/", {
		templateUrl: 'app/home/home.html',
		controller: 'homeController'
	});

	$routeProvider.when("/about", {
		templateUrl: 'app/about/about.html',
		controller: 'aboutController'
	});
}]);