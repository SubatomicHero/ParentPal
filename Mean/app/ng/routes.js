angular.module('app').config(['$routeProvider','$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
                .when('/', {controller: 'LoginCtrl', templateUrl: 'login.html'})
                .when('/register', {controller: 'RegisterCtrl', templateUrl: 'register.html'})
                .when('/login', {controller: 'LoginCtrl', templateUrl: 'login.html'})
                .when('/logout', {controller: 'LogoutCtrl', templateUrl: 'logout.html'})
                .when('/posts', {controller: 'PostsCtrl', templateUrl: 'posts.html'});
    }]);