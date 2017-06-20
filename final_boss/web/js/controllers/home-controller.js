/**
 * Created by Luan on 17/06/2017.
 */
angular.module('finalboss')
    .controller('HomeCtrl', function ($scope, $state, personas, grupos, anuncios, usuario, interesses, $window) {

        $scope.anuncios = anuncios;
        $scope.grupos   = grupos;
        $scope.personas = personas;
        $scope.interesses = interesses;

        $scope.moreDetails = function (anuncio) {
            $window.scrollTo(0, 0);
            $state.go('detail', {'anuncio': anuncio, 'usuario': usuario});
        };


        /* Configurações de Setup do PopUp */
        $scope.mostrar = false;
        $scope.popup = {};
        $scope.mostraPerfil = function (persona) {
            $scope.mostrar = !$scope.mostrar;

            $scope.popup.nome               = persona.nome;
            $scope.popup.idade              = persona.idade;
            $scope.popup.compatibilidade    = persona.compatibilidade;
            $scope.popup.bio                = persona.bio;
            $scope.popup.interesses         = persona.interesses;
        }

    });