'use strict';

angular.module('yardstickApp')

.controller('GoalCtrl', function ($scope, $http, $stateParams) {
	$scope.orderProp = 'name';

	$scope.goalType = $stateParams.selector;

	$http.get('../../goals/goals.json').success(function(data) {
		$scope.goals = data;

	});
});
