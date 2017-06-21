/**
 * Created by Luan on 17/06/2017.
 */
angular.module('finalboss', ['ui.router', "ngStorage"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: 'template/home.html',
                controller: 'HomeCtrl',
                params: {usuario: null},
                resolve: {
                    usuario: function ($stateParams) {
                        return $stateParams.usuario;
                    }
                }
            })
            .state("search", {
                url: "/search",
                templateUrl: 'template/search.html',
                controller: 'SearchCtrl'
            })
            .state("login", {
                url: "/login",
                templateUrl: 'template/login.html',
                controller: 'LoginCtrl'
            })
            .state("createAccount", {
                url: "/create",
                templateUrl: 'template/create.html',
                controller: 'CreateCtrl'
            })
            .state("detail", {
                url: "/detail",
                templateUrl: 'template/detail.html',
                controller: 'DetailCtrl',
                params: {produto: null},
                resolve: {
                    produto: function ($stateParams) {
                        return $stateParams.produto;
                    }
                }
            })
            .state("cart", {
                url: "/cart",
                templateUrl: 'template/cart.html',
                controller: 'CartCtrl'
            })
            .state("checkout", {
                url: "/checkout",
                templateUrl: 'template/checkout.html',
                controller: 'CheckoutCtrl'
            })
            .state("contact", {
                url: "/contact",
                templateUrl: 'template/contact.html',
            })
            .state("faq", {
                url: "/faq",
                templateUrl: 'template/faq.html',
            })
            .state("events", {
                url: "/events",
                templateUrl: 'template/events.html',
            })
        ;

        $urlRouterProvider.otherwise('/home');
    })

    .value('category', [
        {n: "0", title: "Tecnologia"},
        {n: "1", titulo: "Administração"},
        {n: "2", titulo: "Antropologia"},
        {n: "3", titulo: "Engenharia"},
        {n: "4", titulo: "Direito"},
        {n: "5", titulo: "Informatica"},
        {n: "6", titulo: "Ciencia Politica"},
        {n: "7", titulo: "Pedagogia"},
        {n: "8", titulo: "Psicologia"},
    ])
;