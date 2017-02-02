angular
  .module('clubMate')
  .controller('LandingCtrl', LandingCtrl);

LandingCtrl.$inject = ['CurrentUserService', '$state'];
function LandingCtrl(CurrentUserService, $state) {
  if (CurrentUserService.currentUser) {
    return $state.go('eventsIndex');
  }

  const vm = this;

  vm.login    = true;
  vm.register = false;

  vm.showLogin = () => {
    vm.login    = true;
    vm.register = false;
  };

  vm.showRegister = () => {
    vm.login    = false;
    vm.register = true;
  };
}
