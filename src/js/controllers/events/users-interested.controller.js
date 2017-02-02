angular
.module('clubMate')
.controller('UsersInterestedCtrl', UsersInterestedCtrl);

UsersInterestedCtrl.$inject = ['User', '$stateParams'];
function UsersInterestedCtrl(User, $stateParams) {
  const vm  = this;
  vm.title = 'Interested In';
  User
    .get($stateParams).$promise
    .then(response => {
      vm.events = response.interestedIn;
      console.log(vm.events);
    });
}
