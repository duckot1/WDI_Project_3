angular
  .module('clubMate')
  .controller('UsersOutboxCtrl', UsersOutboxCtrl);

UsersOutboxCtrl.$inject = ['API', 'User', '$stateParams'];
function UsersOutboxCtrl(API, User, $stateParams){
  const vm = this;


  User.outbox($stateParams).$promise
  .then(data => {
    vm.messages = data;
    console.log(vm.messages);
    if (vm.messages.length === 0) {
      vm.noMessages = true;
      vm.showMessages   = false;
    } else {
      vm.noMessages = false;
      vm.showMessages   = true;
    }
  });


}
