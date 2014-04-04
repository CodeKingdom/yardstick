'use strict';

var yardstickApp = angular.module('yardstickApp', ['ui.router']);

yardstickApp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");

	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: "views/main.html"
		})
});
