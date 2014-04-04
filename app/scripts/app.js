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
			url: "/goals",
			templateUrl: "../views/goals.html"
		})
			.state('goals.all', {
				templateUrl: '../views/goals.all.html'
			})
			.state('goals.physical', {
				templateUrl: '../views/goals.physical.html'
			})
			.state('goals.spiritual', {
				templateUrl: '../views/goals.spiritual.html'
			})
			.state('goals.professional', {
				templateUrl: '../views/goals.professional.html'
			})
			.state('goals.financial', {
				templateUrl: '../views/goals.financial.html'
			})
			.state('goals.other', {
				templateUrl: '../views/goals.other.html'
			})
});