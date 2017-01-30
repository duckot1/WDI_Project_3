angular
  .module('clubMate')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['API', '$stateParams', 'User'];
function UsersShowCtrl(API, $stateParams, User){
  const vm = this;
  vm.user = User.get($stateParams);
  vm.delete = usersDelete;

  console.log(vm.user, 'show vm.user');

  function usersDelete(user){
    console.log(user, 'userDelete')
    User
      .delete({ id: user._id })
      .$promise
      .then(() => {
        console.log('deleted');
      });
  }
}
