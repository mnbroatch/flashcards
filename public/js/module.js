"use strict;"

var app = angular.module('appName', ['ui.bootstrap','ui.router','angular.filter']); 

app
.filter('categorySelected', function(){
	return function(cards,checkboxObj){
		let newCards = cards.filter( function(card,ind){
			let checkedProps = [];
			for(let prop in checkboxObj){
				if(checkboxObj[prop])
					checkedProps.push(prop);
			}
			if (checkedProps.indexOf(card.category) >= 0)
				return true;
			return false;
		});
		return newCards;
	}
})
.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
	.state('main', {url: '/', templateUrl: 'html/main.html'})
	.state('manager', {url: '/manager', templateUrl: 'html/manager.html', controller:'managerController'})
	.state('game', {url: '/game', templateUrl: 'html/game.html', controller:'gameController'})

	$urlRouterProvider.otherwise('/');

});

