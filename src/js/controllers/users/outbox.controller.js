angular
  .module('clubMate')
  .controller('UsersOutboxCtrl', UsersOutboxCtrl);

UsersOutboxCtrl.$inject = ['API', 'User', '$stateParams'];
function UsersOutboxCtrl(API, User, $stateParams){
  const vm = this;

  vm.user = User.outbox($stateParams);

  console.log('outbox', vm.user);

  console.log('outbox', vm.user);


}
