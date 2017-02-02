angular
  .module('clubMate')
  .controller('UsersDeleteCheckCtrl', UsersDeleteCheckCtrl);

UsersDeleteCheckCtrl.$inject = ['API', '$stateParams', 'User', '$state', 'CurrentUserService'];
function UsersDeleteCheckCtrl(API, $stateParams, User, $state, CurrentUserService){
  const vm = this;
  vm.user = User.get($stateParams);
  console.log(vm.user);

  vm.delete = usersDelete;

  function usersDelete(user){
    User
      .delete({ id: vm.user._id })
      .$promise
      .then(() => {
        CurrentUserService.removeUser();
        $state.go('home');
      });
  }
}
