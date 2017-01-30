angular
  .module('clubMate')
  .controller('EventsShowCtrl', EventsShowCtrl);

EventsShowCtrl.$inject = ['API','$http', '$stateParams', 'User', 'TokenService'];
function EventsShowCtrl(API, $http, $stateParams, User, TokenService) {
  const vm = this;
  vm.request = {};
  const decoded = TokenService.decodeToken();

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
    console.log(decoded);
    vm.request.receiver_id = host.event_host;
    vm.request.sender_id = decoded.id;
    vm.request.event_id = host._id;
    vm.request.text = 'I\'d like to go!';
    User
      .request(vm.request)
      .$promise
      .then(data => {
        console.log(data);
      });
  };
}
