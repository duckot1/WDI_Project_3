angular
  .module('clubMate')
  .controller('UserRegisterCtrl', UserRegisterCtrl);

UserRegisterCtrl.$inject = ['User'];
function UserRegisterCtrl(User) {
  const vm = this;
  vm.hello = 'hello';
  vm.register = () => {
    console.log(vm.user);
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
