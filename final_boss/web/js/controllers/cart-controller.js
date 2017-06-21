/**
 * Created by Luan on 17/06/2017.
 */
angular.module('finalboss')
    .controller('CartCtrl', function ($state, $scope, $localStorage, $window) {
        if(typeof $localStorage.cart != "undefined"){
            $scope.books = $localStorage.cart;
        } else {
            $localStorage.cart = [];
            $scope.books = [];
        }

        $scope.totalProduct = function (index) {
            var total = $scope.books[index].qtd * $scope.books[index].price;
            $scope.books[index].total = total;
            return total.toFixed(2);;
        }

        $scope.atualiUsuario = function (usuario) {
            $localStorage.usuario = JSON.stringify(usuario);
            console.log(usuario);
            $state.go('home', {'usuario': usuario});
        };

        $scope.sumTotalCart = function () {
            var sum = 0;
            var books = $scope.books;
            angular.forEach(books, function(book){
                if(typeof book.total == "number" && book.total > 0){
                    sum += sum + ( parseInt(book.total) );
                }
            });
            $localStorage.cart.total = sum;
            return sum.toFixed(2);
        };

        $scope.finishCart = function () {
            $window.scrollTo(0,0);
            $state.go("checkout");
        }

    });