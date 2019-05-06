// An IIFE that returns a Constructor Function
const TrafficLight = (function() {
  //  private stuff goes here, shared by all instances
  const RED = 'red', YELLOW = 'yellow', GREEN = 'green';

  return function(theName) {
    // per-instance private vars go here
    let name = theName;
    let state = RED;

    this.getName  = function() { return name;    };
    this.getState = function() { return state;   };
    this.next = function() {
      switch(state) {
        case 'red':    state = 'green';  break;
        case 'green':  state = 'yellow'; break;
        case 'yellow': state = 'red';    break;
        default: throw new Error(`Invalid state: ${state}`);
      }
    };
  };
})();

TrafficLight.prototype.toString = function() {
  return this.getName() + ' is ' + this.getState();
};

let trafficLight = new TrafficLight("Peachtree and North Ave");

console.log(trafficLight.toString());
trafficLight.next();
console.log(trafficLight.toString());
trafficLight.next();
console.log(trafficLight.toString());
