export default function Routing($routeProvider, $locationProvider) {
	$routeProvider.otherwise('/overview');
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	$routeProvider
		.when('/overview', {
			template: '<overview-component></overview-component>',
			resolve: {
				customerData: function($q, CustomerService) {
					let defer = $q.defer();
					CustomerService.fetchData(defer);
					//when data is loaded 
					//promise resolves
					return defer.promise;
				}
			}
		})
		.when('/details:customerId', {
			template: '<details-component></details-component>',
			resolve: {
				customerData: function($q, CustomerService) {
					let defer = $q.defer();
					CustomerService.fetchData(defer);
					//when data is loaded 
					//promise resolves
					return defer.promise;
				}
			}
		});
};


Routing.$inject = ['$routeProvider', '$locationProvider'];