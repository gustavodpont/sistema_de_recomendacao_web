/**
 * Created by luan_ on 21/06/2017.
 */
angular.module('finalboss')
    .controller('CheckoutCtrl', function ($state, $scope, $localStorage, $window) {
        if(typeof $localStorage.cart != "undefined"){
            $scope.cart = $localStorage.cart;
        } else {
            $localStorage.cart = [];
            $scope.cart = [];
        }

        $scope.userLog = (typeof $localStorage.usuario != undefined) ? true : false;

        $scope.finishCart = function () {
            $localStorage.cart = [];
            $window.scrollTo(0,0);

            $state.go("home");
        };

    });