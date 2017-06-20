/**
 * Created by Luan on 17/06/2017.
 */
angular.module('finalboss')
    .controller('PersonalidadeCtrl', function ($state, $scope, $localStorage) {

        $scope.usuario = JSON.parse($localStorage.usuario);

        $scope.atualiUsuario = function (usuario) {
            $localStorage.usuario = JSON.stringify(usuario);
            console.log(usuario);
            $state.go('home', {'usuario': usuario});
        };

    });