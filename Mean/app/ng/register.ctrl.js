angular.module('app').controller('RegisterCtrl', ['$scope', 'UserSvc',
    function ($scope, UserSvc) {
        $scope.errorMessage = null;
        $scope.createUser = function (user) {
            if (!passwordsMatch(user.password, user.cpassword)) {
                $scope.errorMessage = "Passwords do not match, try again.";
            } else {
                if ($scope.errorMessage) {
                    $scope.errorMessage = null;
                }
                UserSvc.createUser(user.username, user.password).then(function () {
                    $scope.$emit('login', user);
                });
            }
        };

        function passwordsMatch(first, second) {
            if (first !== second) {
                return false;
            }
            return true;
        }
    }]);