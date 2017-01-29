angular
  .module('clubMate')
  .controller('UserLoginCtrl', UserLoginCtrl);

UserLoginCtrl.$inject = ['User', 'CurrentUserService'];
function UserLoginCtrl(User, CurrentUserService) {
  const vm =this;

  vm.login = () => {
    User
    .login(vm.user)
    .$promise
    .then(() => {
      CurrentUserService.getUser();
    }, err => {
      console.log(err);
    });
  };
}
