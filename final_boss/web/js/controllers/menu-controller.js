/**
 * Created by Luan on 17/06/2017.
 */
angular.module('finalboss')
    .controller('MenuCtrl', function ($state, $scope, $window) {
        $scope.goSearch = function (category) {
            $window.scrollTo(0, 0);
            console.log(category);
            $state.go('search', {category : category});
        };
    });