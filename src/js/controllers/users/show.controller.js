angular
  .module('clubMate')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['API', '$stateParams', 'User', '$state'];
function UsersShowCtrl(API, $stateParams, User, $state){
  const vm = this;
  console.log($stateParams);
  vm.user = User.get($stateParams);
  vm.delete = usersDelete;

  User.inbox({ id: $stateParams.id }).$promise.then(data => {
    console.log(data, 'hiiiiiii');
    vm.requests = data;
  });

  console.log(vm.user, 'show vm.user');

  function usersDelete(user){
    console.log(user, 'userDelete');
    User
      .delete({ id: user._id })
      .$promise
      .then(() => {
        $state.go('home');
      });
  }
}
