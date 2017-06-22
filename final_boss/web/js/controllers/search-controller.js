/**
 * Created by Luan on 17/06/2017.
 */
angular.module('finalboss')
    .controller('SearchCtrl', function ($state, $scope, $localStorage, books, $window, $http) {

        var url = "database.json" ;
        // var listBookJson = [];
        $scope.books = [];
        // $http.get(url).then(function(response){
        //     console.log();
        //     var getBooks = response.data;
        //     angular.forEach(getBooks, function (book, key) {
        //         var title = book.volumeInfo.title;
        //         var description = book.volumeInfo.description;
        //         var author = book.volumeInfo.authors[0];
        //         var price = (book.saleInfo) ? book.saleInfo.listPrice.amount : 10.00;
        //         var rank = Math.floor(Math.random() * (5 - 0)) + 0;
        //         var votes = Math.floor(Math.random() * (100 - 0)) + 0;
        //         var category = "Manga";
        //         var image = (book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : "images/shop/shop-01.jpg";
        //         var informations = (book.searchInfo) ? book.searchInfo.textSnippet : "";
        //
        //         var bookFinished = {
        //             title: title,
        //             description: description,
        //             author: author,
        //             price: price,
        //             rank: rank,
        //             votes: votes,
        //             category: category,
        //             image: image,
        //             informations: informations
        //         }
        //         listBookJson.push( bookFinished );
        //     })
        // });

        // console.log(listBookJson);
        $http.get(url).then(function (response) {
            $scope.books = response.data;
        });



        $scope.moreDetails = function (book) {
            console.log("NIRE");
            $window.scrollTo(0, 0);
            $state.go('detail', {'produto': book});
        };

    });