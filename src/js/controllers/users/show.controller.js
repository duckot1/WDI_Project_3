angular
  .module('clubMate')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['API', '$stateParams', 'User'];
function UsersShowCtrl(API, $stateParams, User){
  console.log('this is working');
  const vm = this;
  vm.user = User.get($stateParams);

  console.log(vm.user);
}
