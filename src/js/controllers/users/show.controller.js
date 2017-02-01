angular
  .module('clubMate')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['API', '$stateParams', 'User', '$state'];
function UsersShowCtrl(API, $stateParams, User, $state){
  const vm = this;
  vm.user = User.get($stateParams);
  console.log('usersShow', vm.user)

  vm.delete = usersDelete;

  function usersDelete(user){
    User
      .delete({ id: user._id })
      .$promise
      .then(() => {
        $state.go('home');
      });
  }
}
