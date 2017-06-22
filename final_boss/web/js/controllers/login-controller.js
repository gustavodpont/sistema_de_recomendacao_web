/**
 * Created by Luan on 17/06/2017.
 */
angular.module('finalboss')
    .controller('LoginCtrl', function ($scope, $state, $localStorage) {

        $scope.user = {};
        $scope.newUser = {};
        $scope.errorLogin = {};
        $scope.error = {};

        if(typeof $localStorage.users == "undefined"){
            $localStorage.users = [];
        }


        /**
         * Responsavel para criar novos usuarios
         *
         * @param newUser
         * @returns {boolean}
         */
        $scope.createUser = function (newUser) {
            // CADASTRAR NOVO USUARIO
            if (newUser.pass != newUser.confPass) {
                $scope.error = "As Senhas são diferentes";
                return false;
            } else if (typeof newUser.email == "undefined") {
                $scope.error = "Por favor, preencha o campo e-mail";
                return false;
            }

            $localStorage.users.push(newUser);
            $scope.error = "Cadastro efetuado com sucesso";
        };

        $scope.rememberMe = function () {
            if (typeof $localStorage.user != "undefined") {
                $scope.user = $localStorage.user;
            }
        };

        $scope.rememberMe();


        /**
         * Responsavel por verificar se o usuario possui cadastro
         *
         * @param user
         * @returns {boolean}
         */
        $scope.login = function (user) {

            if ((typeof user.email == "undefined" ) || (typeof user.pass == "undefined" )) {
                $scope.errorLogin = "Por favor, preencha os campos E-mail/Senha";
                return false;
            }

            angular.forEach($localStorage.users, function (data, key) {
                if(data.email == user.email && data.pass == user.pass){
                    user.id = key;
                    $localStorage.user = user;
                    $state.go('home');
                } else {
                    $scope.errorLogin = "Usuario não encontrado, verificar informações."
                }
            });
        };

    });