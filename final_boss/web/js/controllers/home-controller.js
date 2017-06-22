/**
 * Created by Luan on 17/06/2017.
 */
angular.module('finalboss')
    .controller('HomeCtrl', function ($scope, $state, books, $window, $localStorage, $http) {

        $scope.books = ['=)'];
        $scope.booksRecomendados = [];
        var url = 'http://localhost:3000/api/books';
        $http.get('database.json').then(function (response) {
            // $http.get(url).then(function (response) {
            $localStorage.books = response.data;
        });

        // PREENCHENDO O "LIVROS RECOMENDADOS"
        $scope.getRecomended = function () {
            var lenLastBook = $localStorage.lastBooks.length - 1;
            var category = $localStorage.lastBooks[lenLastBook].category;
            var url = "http://localhost:3000/api/books/find?category='"+ category +"'";
            $http.get(url).then(function (response) {
                $scope.booksRecomendados = response.data;
            });

            // if (typeof $localStorage.lastBooks != "undefined" && $localStorage.lastBooks.length > 0) {
            //
            //     var lenLastBook = $localStorage.lastBooks.length - 1;
            //     var category = $localStorage.lastBooks[lenLastBook].category;
            //     var i = 0;
            //
            //     angular.forEach($localStorage.books, function (data) {
            //         var inArray;
            //         // var inArray;
            //         for (var count = 0; count < $scope.lastRecomended.length; count++) {
            //             if (!inArray) {
            //                 inArray = (data._id == $scope.lastRecomended[count]._id) ? false : true;
            //             }
            //         }
            //
            //         if (data.category === category && (i < 3) && !inArray) {
            //             $scope.booksRecomendados[i] = data;
            //             i++;
            //             inArray = false;
            //         }
            //
            //     });
            //
            // }
        }

        $scope.lastRecomended = $scope.booksRecomendados;

        $scope.getRecomended();

        // PREENCHENDO O "ULTIMAS NOVIDADES"
        $scope.gerNews = function () {
            var lengthBooks = $localStorage.books.length - 1;
            for (var i = 0; i < 6; i++) {
                $scope.books[i] = $localStorage.books[lengthBooks - i];
            }
        };
        $scope.gerNews();

        $scope.moreDetails = function (book) {
            $window.scrollTo(0, 0);
            $state.go('detail', {'produto': book});
        };

    });