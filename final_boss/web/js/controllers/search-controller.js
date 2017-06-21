/**
 * Created by Luan on 17/06/2017.
 */
angular.module('finalboss')
    .controller('SearchCtrl', function ($state, $scope, $localStorage, books, $window) {
        $scope.books = books;

        $scope.moreDetails = function (book) {
            console.log("NIRE");
            $window.scrollTo(0, 0);
            $state.go('detail', {'produto': book});
        };

    });