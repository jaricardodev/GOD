/// <reference path="D:\Work\VSWorkspace\AngularGOD\AngularGOD\Scripts/angular.min.js" />

var godApp = angular.module('rootModule', ['ui.bootstrap', 'ui.router']);
godApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/start");

    $stateProvider
                .state('Start', {
                    url: '/start',
                    views: {
                        'main': {
                            templateUrl: '/app/views/game/start.html'
                        }
                    }
                });
}]).
run();