angular
.module('clubMate')
.controller('EventsIndexCtrl', EventsIndexCtrl);

EventsIndexCtrl.$inject = ['Event'];
function EventsIndexCtrl(Event) {
  const vm  = this;
  vm.slides = vm.events = Event.query();
  vm.giveClass = giveClass;

  function giveClass(index) {
    if (index === 0) return 'active';
  }

  $('a.carousel-control').click((e) => {
    e.preventDefault();
  });
}
