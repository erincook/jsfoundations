// A Constructor Function implemented with an IIFE
function TrafficLight(theName) {
  var that = this;
  (function() {
    var name = theName;
    var state = 'red';
    that.getName  = function() { return name;      };
    that.getState = function() { return state;     };
    that.next = function() {
      switch(state) {
        case 'red':    state = 'green';  break;
        case 'green':  state = 'yellow'; break;
        case 'yellow': state = 'red';    break;
        default: throw new Error(`Invalid state: ${state}`);
      }
    };
    that.toString = function() { return this.getName() + ' is ' + this.getState(); };
  }());
}

let trafficLight = new TrafficLight('Peachtree and North Ave');

console.log(trafficLight.toString());
trafficLight.next();
console.log(trafficLight.toString());
trafficLight.next();
console.log(trafficLight.toString());
