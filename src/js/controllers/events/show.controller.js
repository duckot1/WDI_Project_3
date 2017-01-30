angular
  .module('clubMate')
  .controller('EventsShowCtrl', EventsShowCtrl);

EventsShowCtrl.$inject = ['API','$http', '$stateParams'];
function EventsShowCtrl(API, $http, $stateParams) {
  const vm = this;

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
}
