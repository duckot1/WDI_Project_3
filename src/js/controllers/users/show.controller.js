angular
  .module('clubMate')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['API', '$stateParams', 'User', '$state', 'CurrentUserService'];
function UsersShowCtrl(API, $stateParams, User, $state, CurrentUserService){
  const vm = this;
  vm.user = User.get($stateParams);


  CurrentUserService.getUser();

  vm.delete = usersDelete;
  vm.editDeleteHide = false;

  User.get($stateParams, (data) => {
    vm.event = data;
    console.log(CurrentUserService.currentUser._id);
    console.log(vm.user._id);
    if(vm.user._id === CurrentUserService.currentUser._id){
      vm.editDeleteHide = true;
      console.log(vm.editDeleteHide);
    }
  });


  function usersDelete(user){
    // console.log('you got here');
    User
      .delete({ id: user._id })
      .$promise
      .then(() => {
        $state.go('home');
      });
  }
}
