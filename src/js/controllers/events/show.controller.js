angular
  .module('clubMate')
  .controller('EventsShowCtrl', EventsShowCtrl);

EventsShowCtrl.$inject = ['API','$http', '$stateParams', 'User', 'CurrentUserService'];
function EventsShowCtrl(API, $http, $stateParams, User, CurrentUserService) {
  const vm = this;
  vm.request = {};

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
    console.log(host.event_host);
    vm.request.receiver_id = host.event_host;
    vm.request.sender_id = CurrentUserService.getUser()._id;
    vm.request.event_id = host._id;
    User
      .request(vm.request)
      .$promise
      .then(data => {
        console.log(data);
      });
  };
}
