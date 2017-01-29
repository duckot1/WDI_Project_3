angular
  .module('clubMate')
  .controller('UserRegisterCtrl', UserRegisterCtrl);

UserRegisterCtrl.$inject = ['User', 'CurrentUserService'];
function UserRegisterCtrl(User, CurrentUserService) {
  const vm = this;
  vm.register = () => {
    User
    .register(vm.user)
    .$promise
    .then(() => {
      CurrentUserService.getUser();
    }, err => {
      console.log(err);
    });
  };
}
