angular
  .module('clubMate')
  .controller('EventsNewCtrl', EventsNewCtrl);

EventsNewCtrl.$inject = ['API', '$http', '$state'];
function EventsNewCtrl(API, $http, $state) {
  const vm = this;

  vm.create = function create() {
    return $http
      .post(`${API}/events`, vm.event)
      .then(() => {
        $state.go('eventsIndex');
      });
  };
}
