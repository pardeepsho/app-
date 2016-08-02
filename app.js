/**
 * Created by DAY on 23-03-2016.
 */
var app = angular.module('signupForm', ['ngRoute','ngAria','ui.bootstrap','ngMaterial','ngMessages','angularMoment','ngMask','ngAnimate']);
app.config(['$routeProvider','$mdDateLocaleProvider','moment',
    function($routeProvider,$mdDateLocaleProvider,moment) {
        $mdDateLocaleProvider.formatDate = function(date) {
            return moment(date).format('MM/DD/YYYY');
        };

        $mdDateLocaleProvider.parseDate = function(dateString) {
            if (dateString == null || dateString.length == 0) {
                return null;
            }

            var m = moment(dateString, 'MM/DD/YYYY', true);
            return m.isValid() ? m.toDate() : new Date(NaN);
        };
        $routeProvider
            .when('/home', {
                templateUrl: 'home.html',
                controllerAs:'vm',
                controller: 'HomePageCtrl'
            })
            .when('/preview', {
                templateUrl: 'preview.html',
               controllerAs:'vm',
               controller: 'previewPageCtrl'
            })
            .when('/buddylist', {
                templateUrl: 'buddyList.html',
                controllerAs:'vm',
                controller: 'buddylistPageCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            })
    }
]);