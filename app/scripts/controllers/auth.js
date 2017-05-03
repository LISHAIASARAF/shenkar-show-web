'use strict';

angular.module('sbAdminApp')
    .controller('AuthCtrl', function ($scope, $position, $http, Authentication, $state) {
        $scope.userName = '';
        $scope.password = '';



        $scope.login = function () {

            $http.post(
                'https://shenkar-show.herokuapp.com/users/auth',
                {
                    userName: $scope.userName,
                    password: $scope.password
                }
            )
                .then(
                    function (res) {
                        var a = res.data;
                        Authentication.setUser(res.data);
                        $state.go('dashboard.departments')
                    },
                    function (err) {

                    }
                );

        }

    });
