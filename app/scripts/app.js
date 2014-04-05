'use strict';

angular.module('yardstickApp')

.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/goals");

	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: "../views/home.html"
		})
		.state('friends', {
			url: "/friends",
			templateUrl: "../views/friends.html"
		})
		.state('surveys', {
			url: "/surveys",
			templateUrl: "../views/surveys.html"
		})
		.state('account', {
			url: "/account",
			templateUrl: "../views/account.html"
		})
		.state('goals', {
			url: "/goals/:selector",
			templateUrl: "../views/goals.html",
			controller: "GoalCtrl"
		})
});