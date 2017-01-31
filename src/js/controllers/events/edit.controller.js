angular
 .module('clubMate')
 .controller('EventsEditCtrl', EventsEditCtrl);

EventsEditCtrl.$inject = ['API', '$stateParams', 'Event', '$state'];
function EventsEditCtrl(API, $stateParams, Event, $state){
  const vm = this;
  console.log($stateParams);
  vm.event = Event.get($stateParams);
  vm.update = eventsUpdate;

  function eventsUpdate(){
    Event
      .update({ id: $stateParams.id }, vm.event)
      .$promise
      .then(() => {
        console.log('I have updated');
        console.log(vm.event, 'update vm.event');
        $state.go('eventsShow', { id: `${$stateParams.id}` });
      });
  }

}





// angular
// .module('clubMate')
// .controller('EventsEditCtrl', EventsEditCtrl);
//
// EventsEditCtrl.$inject = ['API', '$http', '$state', '$stateParams'];
// function EventsEditCtrl(API, $http, $state, $stateParams) {
//   const vm = this;
//
//   EventsShow();
//
//   function EventsShow() {
//     return $http
//     .get(`${API}/events/${$stateParams.id}`)
//     .then(response => {
//       vm.event = response.data;
//     });
//   }
//   vm.update = function EventsUpdate() {
//     return $http
//       .put(`${API}/events/${vm.event._id}`, vm.event)
//       .then(() => {
//         $state.go('eventsIndex');
//       });
//   };
// }
