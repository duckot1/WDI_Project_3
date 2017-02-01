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
    .then(user => {
      CurrentUserService.getUser();
      console.log(user);
      $state.go('usersShow', { id: user.user._id });
    }, err => {
      console.log(err);
    });
  };
}
