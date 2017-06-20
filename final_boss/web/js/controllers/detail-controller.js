/**
 * Created by Luan on 17/06/2017.
 */
angular.module('finalboss')
    .controller('DetailCtrl', function ($state, $scope, $localStorage, $timeout, produto, $window) {
        // if (anuncio) {
        //     $localStorage.anuncio = JSON.stringify(anuncio);
        //     $scope.anuncio = anuncio;
        // } else {
        //     $scope.anuncio = JSON.parse($localStorage.anuncio);
        // }
        //
        // $scope.grupos = grupos;
        // $scope.personas = personas;
        // $scope.interesses = interesses;
        // var usuario = JSON.parse($localStorage.usuario);
        //
        // $scope.imgPrincipal = $scope.anuncio.imgFachada;
        //
        // $scope.addUsuario = function (idQuarto, idGrupo) {
        //     $scope.grupos[idGrupo].personas[idQuarto] = 20;
        //     $scope.countGrupo(idGrupo);
        // }
        //
        // $scope.addGrupo = function () {
        //     $scope.grupos.push({n: "20", titulo: "Novo Grupo", personas: ["20"]});
        //     $scope.anuncio.grupos.push($scope.grupos.length - 1);
        // };
        //
        // $scope.countGrupo = function (idGrupo) {
        //     var encheu = ($scope.grupos[idGrupo].personas.length == $scope.anuncio.quartos.length) ? true : false;
        //     if (encheu) {
        //         $state.go('finalizado')
        //     }
        //     else {
        //         $scope.mostrarCompartilhar = true;
        //     }
        // }
        //
        // $scope.mostrarShared = function (value) {
        //     $scope.mostrarCompartilhar = value;
        // }
        //
        //
        // $scope.tradeImg = function (url) {
        //     $scope.imgPrincipal = url;
        // }
        //
        // $scope.back = function () {
        //     $window.scrollTo(0, 0);
        //     $state.go('home');
        // }
        //
        // /* Configurações de Setup do PopUp */
        // $scope.mostrar = false;
        // $scope.popup = {};
        // $scope.mostraPerfil = function (persona) {
        //     $scope.mostrar = !$scope.mostrar;
        //
        //     $scope.popup.nome = persona.nome;
        //     $scope.popup.idade = persona.idade;
        //     $scope.popup.compatibilidade = persona.compatibilidade;
        //     $scope.popup.bio = persona.bio;
        //     $scope.popup.interesses = persona.interesses;
        // }

    });