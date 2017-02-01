angular
  .module('clubMate')
  .controller('EventsShowCtrl', EventsShowCtrl);

EventsShowCtrl.$inject = ['API', '$stateParams', 'User', 'Event', '$state', 'TokenService', 'CurrentUserService'];
function EventsShowCtrl(API, $stateParams, User, Event, $state, TokenService, CurrentUserService) {
  const vm = this;

  vm.event = Event.get($stateParams);
  vm.delete = eventsDelete;
  vm.interested = sendInterested;
  vm.notInterested = sendNotInterested;
console.log('eventShow', vm.event)


  vm.interestedToggle      = true;
  vm.notInterestedToggle   = true;
  vm.deleteToggle          = false;
  vm.editToggle            = false;

  CurrentUserService.getUser();

  Event.get($stateParams, (data) => {
    vm.event = data;
    console.log(CurrentUserService.currentUser._id);
    console.log(vm.event.host._id);
    if (CurrentUserService.currentUser._id === vm.event.host._id){
      vm.deleteToggle          = true;
      vm.editToggle            = true;
      vm.interestedToggle      = false;
      vm.notInterestedToggle   = false;
    } else {
      vm.deleteToggle          = false;
      vm.editToggle            = false;
      vm.interestedToggle      = true;
      vm.notInterestedToggle   = true;
    }
    interestedInHideButtons();
  });

  function interestedInHideButtons(){
    const interested = CurrentUserService.currentUser.interestedIn;
    interested.forEach(function(interested){
      if (interested._id === vm.event._id){
        vm.interestedToggle      = false;
        vm.notInterestedToggle   = false;
      }
    });
  }

  function eventsDelete(event){
    Event
      .delete({ id: event._id })
      .$promise
      .then(() => {
        $state.go('eventsIndex');
      });
  }

  function sendInterested(event) {
    User
      .request({
        receiver: event.host._id,
        event: event._id,
        interested: true,
        text: 'Hi there I would like to join you'
      })
      .$promise
      .then(response => {
        $state.go('eventsIndex');
      });
  }

  const decoded = TokenService.decodeToken();

  function sendNotInterested(event) {
    User
      .get({ id: decoded.id })
      .$promise
      .then((user) => {
        user.notInterestedIn.push(event._id);
        User
          .update({ id: decoded.id }, user)
          .$promise
          .then(data => {
            $state.go('eventsIndex');
          });
      });
  }

  Event
    .inbox({ id: $stateParams.id })
    .$promise
    .then(data => {
      // console.log(data);
    });
}



//   function EventsShow() {
//     return $http
//       .get(`${API}/events/${$stateParams.id}`)
//       .then(response => {
//         vm.event = response.data;
//       });
//   }
//   vm.delete = function eventsDelete() {
//     return $http
//       .delete(`${API}/events/${$stateParams.id}`);
//   };
//   vm.interest = function(host) {
//     vm.request.receiver_id = host.event_host;
//     vm.request.sender_id = decoded.id;
//     vm.request.event_id = host._id;
//     User
//       .request(vm.request)
//       .$promise
//       .then(data => {
//         console.log(data);
//       });
//   };
// }
//
//
//   function EventsShow() {
//     return $http
//       .get(`${API}/events/${$stateParams.id}`)
//       .then(response => {
//         vm.event = response.data;
//         console.log(vm.event);
//       });
//   }
//   vm.delete = function eventsDelete() {
//     return $http
//       .delete(`${API}/events/${$stateParams.id}`);
//   };
//   vm.interest = function(host) {
//     // console.log(decoded);
//     vm.request.receiver_id = host.event_host;
//     vm.request.sender_id = decoded.id;
//     vm.request.event_id = host._id;
//     vm.request.text = 'I\'d like to go!';
//     User
//       .request(vm.request)
//       .$promise
//       .then(data => {
//         // console.log(data);
//       });
//   };
// }
