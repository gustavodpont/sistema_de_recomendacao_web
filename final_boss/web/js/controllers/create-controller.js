/**
 * Created by Luan on 17/06/2017.
 */
angular.module('finalboss')
    .controller('CreateCtrl', function ($scope, $state, $localStorage) {

        $scope.usuario = {};

        $scope.criarUsuario = function (usuario) {
            usuario.img = "img/template/perfil.jpg";
            $localStorage.usuario = JSON.stringify(usuario);
            console.log(usuario);
            $state.go('personalidade');
            // $state.go('home', {'usuario' : usuario});
        };

    });