angular.module('app').service('UserSvc', ['$http', function ($http) {
        var svc = this;
        svc.getUser = function () {
            return $http.get('/api/users');
        };
        
        svc.setRememberMe = function(bool) {
            this.rememberMe = bool;
        };
        
        svc.getRememberMe = function() {
            return this.rememberMe;
        };
        
        svc.login = function (user) {
            return $http.post('/api/sessions', {
                username: user.username,
                password: user.password
            }).then(function (val) {
                window.localStorage.token = val.data;
                $http.defaults.headers.common['X-Auth'] = val.data;
                svc.setRememberMe(user.save);
                return svc.getUser();
            });
        };

        svc.logout = function () {
            $http.defaults.headers.common['X-Auth'] = null;
            if (!svc.getRememberMe()) {
                window.localStorage.removeItem("token");
            }
        };

        svc.createUser = function (username, password) {
            return $http.post('/api/users', {
                username: username,
                password: password
            }).success(function () {
                return svc.login(username, password);
            }).error(function (data) {
                console.log("Error: " + data);
            });
        };
    }]);