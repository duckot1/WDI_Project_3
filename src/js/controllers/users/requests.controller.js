angular
  .module('clubMate')
  .controller('UsersRequestsCtrl', UsersRequestsCtrl);

UsersRequestsCtrl.$inject = ['$stateParams'];
function UsersRequestsCtrl($stateParams) {
console.log($stateParams)
  const vm = this;

  vm.user = $stateParams;
  vm.inbox  = true;
  vm.outbox = false;

  vm.showInbox = () => {
    vm.inbox   = true;
    vm.outbox  = false;
  };

  vm.showOutbox = () => {
    console.log('showing outbox')
    vm.inbox    = false;
    vm.outbox   = true;
  };
}
