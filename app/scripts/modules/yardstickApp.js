angular.module('yardstickApp', ['ui.router'])
	.run(
	[        '$rootScope', '$state', '$stateParams',
		function ($rootScope,   $state,   $stateParams) {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
		}]);