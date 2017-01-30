angular
  .module('clubMate')
  .controller('UserRegisterCtrl', UserRegisterCtrl);

UserRegisterCtrl.$inject = ['User', 'CurrentUserService'];
function UserRegisterCtrl(User, CurrentUserService) {
  const vm = this;
  vm.hello = 'hello';
  vm.register = () => {
    console.log(vm.user);
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
