angular.module('app').controller('ApplicationCtrl', ['$scope', '$location','$http','UserSvc',
    function ($scope, $location, $http, UserSvc) {
        if (window.localStorage.token) {
            $http.defaults.headers.common['X-Auth'] = window.localStorage.token;
            UserSvc.getUser().then(function(data) {
                $scope.currentUser = data.data;
            });
        }

        $scope.$on('login', function (_, user) {
            $scope.currentUser = user;
            $location.path('/posts');
        });

        $scope.$on('logout', function () {
            $scope.currentUser = null;
            $location.path('/');
        });
    }]);