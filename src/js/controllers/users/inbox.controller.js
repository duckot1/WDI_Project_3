angular
  .module('clubMate')
  .controller('UsersInboxCtrl', UsersInboxCtrl);

UsersInboxCtrl.$inject = ['API', 'User', '$stateParams'];
function UsersInboxCtrl(API, User, $stateParams){
  const vm = this;

  vm.user = User.inbox($stateParams);

  console.log(vm.user);

  vm.accept = eventAccept;

  function eventAccept(x){
    x.status = 'accepted';
    console.log(x);
    User
      .requestUpdate({ id: x._id }, x)
      .$promise
      .then((response) => {
        console.log(response);
        // $state.go('home');
      });


  }

}
