angular
  .module('clubMate')
  .controller('UserLoginCtrl', UserLoginCtrl);

UserLoginCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function UserLoginCtrl(User, CurrentUserService, $state) {
  const vm =this;

  vm.login = () => {
    User
    .login(vm.user)
    .$promise
    .then(() => {
      CurrentUserService.getUser();
      $state.go('eventsIndex');
    }, err => {
      console.log(err);
    });
  };
}
