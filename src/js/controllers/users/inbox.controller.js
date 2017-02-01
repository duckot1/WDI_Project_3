angular
  .module('clubMate')
  .controller('UsersInboxCtrl', UsersInboxCtrl);

UsersInboxCtrl.$inject = ['API', 'User', '$stateParams'];
function UsersInboxCtrl(API, User, $stateParams){
  const vm = this;

  vm.user = User.inbox($stateParams);

  console.log(vm.user);

}
