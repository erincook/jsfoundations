'use strict';

// IIFE that returns an ES-6 Class
const TrafficLight = (() => {
  let state = 'red';
  class TrafficLight {
    constructor(name) {
      this.name = name;
    }
    getName()  {
      return this.name;
    }
    getState() {
      return state;
    }
    next() {
      switch(state) {
        case 'red':    state = 'green';  break;
        case 'green':  state = 'yellow'; break;
        case 'yellow': state = 'red';    break;
        default: throw new Error(`Invalid state: ${state}`);
      }
    }
    toString() {
      return this.getName() + ' is ' + this.getState();
    }
  }
  return TrafficLight;
})();

let trafficLight = new TrafficLight('North Ave and Peachtree');
console.log(trafficLight.toString());
trafficLight.next();
console.log(trafficLight.toString());
trafficLight.next();
console.log(trafficLight.toString());
// the next line will not affect the behavior of the object due to
// the protection of the closure.
trafficLight.state = 'purple';
console.log(trafficLight.toString());
