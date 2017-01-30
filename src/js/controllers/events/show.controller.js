angular
  .module('clubMate')
  .controller('EventsShowCtrl', EventsShowCtrl);

EventsShowCtrl.$inject = ['API','$http', '$stateParams', 'User', 'TokenService'];
function EventsShowCtrl(API, $http, $stateParams, User, TokenService) {
  const vm = this;
<<<<<<< HEAD
  vm.request;
=======
  vm.request = {};
  const decoded = TokenService.decodeToken();
>>>>>>> 36a02b04a05cdc4f66f4da4def6c7eef274175d8

  EventsShow();

  function EventsShow() {
    return $http
      .get(`${API}/events/${$stateParams.id}`)
      .then(response => {
        vm.event = response.data;
      });
  }
  vm.delete = function eventsDelete() {
    return $http
      .delete(`${API}/events/${$stateParams.id}`);
  };
  vm.interest = function(host) {
<<<<<<< HEAD
=======
    console.log(decoded);
>>>>>>> 36a02b04a05cdc4f66f4da4def6c7eef274175d8
    vm.request.receiver_id = host.event_host;
    vm.request.sender_id = decoded.id;
    vm.request.event_id = host._id;
    User
      .request(vm.request)
      .$promise
      .then(data => {
        console.log(data);
      });
  };
}
