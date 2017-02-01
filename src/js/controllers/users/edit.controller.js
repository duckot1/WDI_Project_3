angular
 .module('clubMate')
 .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['API', '$stateParams', 'User', '$state'];
function UsersEditCtrl(API, $stateParams, User, $state){
  const vm = this;

  vm.user = {};
  vm.user = User.get($stateParams);
  vm.update = userUpdate;

  function userUpdate(){
    User
      .update({ id: $stateParams.id }, vm.user)
      .$promise
      .then(() => {
        $state.go('usersShow', { id: `${$stateParams.id}` });
      });
  }

}
