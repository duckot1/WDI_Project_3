angular
 .module('clubMate')
 .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['API', '$stateParams', 'User', '$state'];
function UsersEditCtrl(API, $stateParams, User, $state){
  const vm = this;
  console.log($stateParams);
  vm.user = User.get($stateParams);
  vm.update = usersUpdate;

  function usersUpdate(){
    User
      .update({ id: $stateParams.id }, vm.user)
      .$promise
      .then(() => {
        console.log('I have updated');
        console.log(vm.user, 'update vm.user');
        $state.go('usersShow', { id: `${$stateParams.id}` });
      });
  }

}
