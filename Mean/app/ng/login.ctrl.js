angular.module('app').controller('LoginCtrl', ['$scope', 'UserSvc',
    function ($scope, UserSvc) {
        $scope.login = function (user) {
            UserSvc.login(user).then(function (val) {
                $scope.$emit('login', val.data);
            });
        };
    }]);