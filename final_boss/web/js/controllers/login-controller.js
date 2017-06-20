/**
 * Created by Luan on 17/06/2017.
 */
angular.module('finalboss')
    .controller('LoginCtrl', function ($scope, $state, $localStorage) {

        $scope.user = {};
        $scope.newUser = {};
        $scope.errorLogin = {};
        $scope.error = {};

        $scope.createUser = function (newUser) {
            // CADASTRAR NOVO USUARIO
            if (newUser.pass != newUser.confPass) {
                $scope.error = "As Senhas são diferentes";
                return false;
            } else if (typeof newUser.email == "undefined") {
                $scope.error = "Por favor, preencha o campo e-mail";
                return false;
            }

            // newUser.img = "img/template/perfil.jpg";
            // $localStorage.user = JSON.stringify(newUser);
            console.log(newUser);
            // $state.go('personalidade');
            // $state.go('home', {'usuario' : usuario});
            $scope.error = "Cadastro efetuado com sucesso";
        };

        $scope.rememberMe = function () {
            if (typeof $localStorage.user != "undefined") {
                $scope.user = JSON.parse($localStorage.user);
            }
        };

        $scope.rememberMe();

        $scope.login = function (user) {

            if ((typeof user.email == "undefined" ) || (typeof user.pass == "undefined" )) {
                $scope.errorLogin = "Por favor, preencha os campos E-mail/Senha";
                return false;
            }

            var userId = false;
            // FAZER REQUISICAO PARA VERIFICAR SE O USUARIO ESTA CADASTRADO
            // VERIFICAR SE OS DADOS ESTAO CORRETOS
            console.log(user);

            if (user.remember) {
                $localStorage.user = JSON.stringify(user);
            }

            if (userId) {
                $state.go('home')
            }
        };

    });