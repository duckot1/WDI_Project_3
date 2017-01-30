angular
.module('clubMate')
.controller('EventsEditCtrl', EventsEditCtrl);

EventsEditCtrl.$inject = this ['API', '$http', '$state', '$stateParams'];
function EventsEditCtrl(API, $http, $state, $stateParams) {
  const vm = this;

  EventsShow();

  function EventsShow() {
    return $http
    .get(`${API}/events/${$stateParams.id}`)
    .then(response => {
      vm.event = response.data;
    });
  }
  vm.update = function EventsUpdate() {
    return $http
      .put(`${API}/events/${vm.event._id}`, vm.event)
      .then(() => {
        $state.go('eventsIndex');
      });
  };
}
