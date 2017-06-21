/**
 * Created by Luan on 17/06/2017.
 */
angular.module('finalboss')
    .controller('DetailCtrl', function ($state, $scope, $localStorage, books, produto, $window) {
        if (produto) {
            $localStorage.book = JSON.stringify(produto);
            $scope.book  = produto;
        } else {
            $scope.book = JSON.parse($localStorage.book);
        }

        /*
         * Aqui sera exibido apenas 4 itens de acordo com a categoria do livro selecionado atualmente
         */
        $scope.books = [];
        angular.forEach(books, function (value, key) {
            if(key >= 4){
                return false;
            }
            $scope.books[key] = value;
        });

        $scope.addToCart = function (book) {
            if (typeof $localStorage.cart == "undefined"){
                $localStorage.cart = [];
                $localStorage.cart.push(book);
            } else {
                $localStorage.cart.push(book);
            }

            $window.scrollTo(0, 0);
            $state.go('cart');
        };

        $scope.back = function () {
            $window.scrollTo(0, 0);
            $state.go('home');
        }
    });