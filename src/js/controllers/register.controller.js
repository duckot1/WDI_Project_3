angular
  .module('clubMate')
  .controller('userRegisterCtrl', userRegisterCtrl);

userRegisterCtrl.$inject = ['User'];
function userRegisterCtrl(User) {
  const vm = this;
  vm.register = () => {
    User
    .register(vm.user)
    .$promise
    .then(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  };
}
