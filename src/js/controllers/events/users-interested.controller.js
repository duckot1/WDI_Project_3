angular
.module('clubMate')
.controller('UsersAttendingCtrl', UsersAttendingCtrl);

UsersAttendingCtrl.$inject = ['User', '$stateParams'];
function UsersAttendingCtrl(User, $stateParams) {
  const vm  = this;
  vm.title = 'Interested In';
  User
    .get($stateParams).$promise
    .then(response => {
      vm.events = response.interestedIn;
      console.log(vm.events);
    });

}
