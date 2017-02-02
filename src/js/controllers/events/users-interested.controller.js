angular
.module('clubMate')
.controller('UsersInterestedCtrl', UsersInterestedCtrl);

UsersInterestedCtrl.$inject = ['User', '$stateParams'];
function UsersInterestedCtrl(User, $stateParams) {
  const vm  = this;

  User
    .get($stateParams).$promise
    .then(response => {
      vm.events = response.interestedIn;
    });
}
