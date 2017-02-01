angular
.module('clubMate')
.controller('EventsIndexCtrl', EventsIndexCtrl);

EventsIndexCtrl.$inject = ['Event', '$stateParams', 'CurrentUserService'];
function EventsIndexCtrl(Event, $stateParams, CurrentUserService) {
  const vm            = this;
  vm.user             = CurrentUserService.getUser();
  vm.swipedLeft       = swipedLeft;
  vm.swipedRight      = swipedRight;

  Event
  .query($stateParams)
  .$promise
  .then(response => {
    vm.events = response;
  });

  function swipedLeft(event) {
    event.animation  = 'slideOutLeft';
    console.log(event);
  }

  function swipedRight(event) {
    event.animation  = 'slideOutRight';
    console.log(event);
  }
}
