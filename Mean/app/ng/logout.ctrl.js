angular.module('app').controller('LogoutCtrl', ['$scope', 'UserSvc',
    function ($scope, UserSvc) {
        $scope.logout = function () {
            UserSvc.logout();
            $scope.$emit('logout');
        };
        $scope.logout();
    }]);