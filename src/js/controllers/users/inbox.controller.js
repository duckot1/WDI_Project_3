angular
  .module('clubMate')
  .controller('UsersInboxCtrl', UsersInboxCtrl);

UsersInboxCtrl.$inject = ['API', 'User', '$stateParams', '$state'];
function UsersInboxCtrl(API, User, $stateParams, $state){
  const vm = this;

  vm.user = User.inbox($stateParams);

  console.log(vm.user);

  vm.accept = eventAccept;
  vm.hideOnAccept = hideOnAccept;

  function hideOnAccept(y){
    console.log(y);
    if(y === 'pending'){
      return true;
    } else {
      return false;
    }
  }

  function eventAccept(x){
    x.status = 'accepted';
    User
      .requestUpdate({ id: x._id }, x)
      .$promise
      .then((response) => {
        console.log(response);
        $state.go('events');
      });
  }

}
