angular
  .module('clubMate')
  .controller('UserRegisterCtrl', UserRegisterCtrl);

UserRegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function UserRegisterCtrl(User, CurrentUserService, $state) {
  const vm = this;
  vm.register = () => {
    console.log(vm.user);
    User
    .register(vm.user)
    .$promise
    .then((response) => {
      CurrentUserService.getUser();
      // $state.go('userShow', response.user._id);
    }, err => {
      console.log(err);
    });
  };
}
