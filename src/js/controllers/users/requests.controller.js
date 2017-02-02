angular
  .module('clubMate')
  .controller('UsersRequestsCtrl', UsersRequestsCtrl);

UsersRequestsCtrl.$inject = ['$stateParams'];
function UsersRequestsCtrl($stateParams) {
  const vm = this;

  vm.user = $stateParams;
  vm.usersInbox  = true;
  vm.usersOutbox = false;

  vm.showInbox = () => {
    vm.usersInbox   = true;
    vm.usersOutbox  = false;
  };

  vm.showOutbox = () => {
    vm.usersInbox    = false;
    vm.usersOutbox   = true;
  };
}
