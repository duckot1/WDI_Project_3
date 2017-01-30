angular
  .module('clubMate')
  .controller('EventsIndexCtrl', EventsIndexCtrl);

EventsIndexCtrl.$inject = ['$http', 'API'];
function EventsIndexCtrl($http, API){
  const vm = this;

  eventsIndex();

  function eventsIndex() {
    return $http
    .get(`${API}/events`)
    .then(response => {
      vm.events = response.data;
    });
  }
}
