angular
  .module('clubMate')
  .controller('UserLoginCtrl', UserLoginCtrl);

UserLoginCtrl.$inject = ['User', 'TokenService'];
function UserLoginCtrl(User, TokenService) {
  const vm =this;

  vm.login = () => {
    User
    .login(vm.user)
    .$promise
    .then(data => {
      console.log(data);
      TokenService.setToken(data.token);
    }, err => {
      console.log(err);
    });
  };
}
