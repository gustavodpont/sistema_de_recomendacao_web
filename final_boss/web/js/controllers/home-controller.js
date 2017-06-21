/**
 * Created by Luan on 17/06/2017.
 */
angular.module('finalboss')
    .controller('HomeCtrl', function ($scope, $state, books, $window) {
        $scope.books = [];
        $scope.booksRecomendados = [];

        // PREENCHENDO O "LIVROS EM DESTAQUE"
        angular.forEach(books, function (value, key) {
            if(key >= 6){
                return false;
            }
            $scope.books[key] = value;
        });

        // PREENCHENDO O "LIVROS RECOMENDADOS"

        for(var i = 0; i < 3; i++){
            $scope.booksRecomendados[i] = books[i];
        };

        $scope.moreDetails = function (book) {
            $window.scrollTo(0, 0);
            $state.go('detail', {'produto': book});
        };

    });