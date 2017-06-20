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
                templateUrl: 'template/search.html'
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
            })
            .state("checkout", {
                url: "/checkout",
                templateUrl: 'template/checkout.html'
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

    .value('personas', [
        {
            n: "0",
            nome: "Arthur",
            idade: 23,
            ocupacao: "Estudante de Publicidade",
            compatibilidade: 82,
            interesses: ["0", "5"],
        }, {
            n: "1",
            nome: "Bianca",
            idade: 22,
            compatibilidade: 89,
            ocupacao: "Aux. Administrativo(a)",
            interesses: ["3", "4"],
        }, {
            n: "2",
            nome: "Camila",
            idade: 27,
            compatibilidade: 62,
            ocupacao: "Advogada",
            interesses: ["0", "3"],
        }, {
            n: "3",
            nome: "Dirce",
            idade: 30,
            compatibilidade: 92,
            ocupacao: "Corretora de Imóveis",
            interesses: ["3", "4"],
        }, {
            n: "4",
            nome: "Fernando",
            idade: 32,
            compatibilidade: 37,
            ocupacao: "DJ",
            interesses: ["0", "5"],
        }, {
            n: "5",
            nome: "Grazielle",
            idade: 30,
            compatibilidade: 58,
            ocupacao: "Contadora",
            interesses: ["0", "2"],
        }, {

            n: "6",

            nome: "Jean",

            idade: 28,

            compatibilidade: 23,

            ocupacao: "Desempregado",

            interesses: ["0", "5"],

        }, {

            n: "7",

            nome: "Jessica",

            idade: 30,

            compatibilidade: 92,

            ocupacao: "Nutricionista",

            interesses: ["2", "5"],

        }, {

            n: "8",

            nome: "João",

            idade: 44,

            compatibilidade: 75,

            ocupacao: "Advogado",

            interesses: ["3", "4"],

        }, {

            n: "9",

            nome: "Liara",

            idade: 33,

            compatibilidade: 85,

            ocupacao: "Gerente Comercial",

            interesses: ["0", "2"],

        }, {

            n: "10",

            nome: "Lucas",

            idade: 35,

            compatibilidade: 62,

            ocupacao: "Personal Trainer",

            interesses: ["0", "3", "4"],

        }, {

            n: "11",

            nome: "Luciane",

            idade: 39,

            compatibilidade: 50,

            ocupacao: "Do lar",

            interesses: ["1", "3", "5"],

        }, {

            n: "12",

            nome: "Luis",

            idade: 30,

            compatibilidade: 83,

            ocupacao: "Estudante de Direito",

            interesses: ["0", "1", "2"],

        }, {

            n: "13",

            nome: "Max",

            idade: 33,

            compatibilidade: 79,

            ocupacao: "Vendedor",

            interesses: ["0", "3", "5"],

        }, {

            n: "14",

            nome: "Pâmela",

            idade: 32,

            compatibilidade: 92,

            ocupacao: "Secretária",

            interesses: ["0", "2"],

        }, {

            n: "15",

            nome: "Paula",

            idade: 26,

            compatibilidade: 63,

            ocupacao: "Enfermeira",

            interesses: ["3", "4"],

        }, {

            n: "16",

            nome: "Rodrigo",

            idade: 30,

            compatibilidade: 76,

            ocupacao: "Estudante",

            interesses: ["1", "2"],

        }, {

            n: "17",

            nome: "Thiago",

            idade: 35,

            compatibilidade: 29,

            ocupacao: "Músico",

            interesses: ["0", "5"],

        }, {

            n: "18",

            nome: "Sérgio",

            idade: 33,

            compatibilidade: 92,

            ocupacao: "Empresário",

            interesses: ["2", "3"],

        }, {

            n: "19",

            nome: "Shaiane",

            idade: 29,

            compatibilidade: 75,

            ocupacao: "Psicóloga",

            interesses: ["0", "2", "3"]
        }, {

            n: "20",

            nome: "Você",

            idade: "18+",

            compatibilidade: 100,

            ocupacao: "Não Informada",

            interesses: ["0", "2", "3"]
        }

    ])

    .value('grupos', [
        {n: "0", titulo: "GRUPO 000", personas: ["10", "11"]},
        {n: "1", titulo: "GRUPO 001", personas: ["2"]},
        {n: "2", titulo: "GRUPO 002", personas: ["1"]},
        {n: "3", titulo: "GRUPO 003", personas: []},
        {n: "4", titulo: "GRUPO 004", personas: ["7"]},
        {n: "5", titulo: "GRUPO 005", personas: []},
        {n: "6", titulo: "GRUPO 006", personas: ["5"]},
        {n: "7", titulo: "GRUPO 007", personas: []},
    ])

    .value('interesses', [
        {n: "0", titulo: "Baladeiro"},
        {n: "1", titulo: "Geek"},
        {n: "2", titulo: "Fitness"},
        {n: "3", titulo: "Caseiro"},
        {n: "4", titulo: "LGBT"},
        {n: "5", titulo: "Músico"}
    ])
;