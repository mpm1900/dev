
angular.module('app', ['ngRoute']);

angular.module('app').config(['$routeProvider', function($routeProvider) {

	// app url routing
	$routeProvider.when("/", {
		templateUrl: base + './home/home.html',
		controller: 'HomeController'
	});
}]);