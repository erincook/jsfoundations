'use strict';

// An ES-6 Class
class TrafficLight {
  constructor(name) {
    this.state = 'red';
    this.name = name;
  }
  getName()  {
    return this.name;
  }
  getState() {
    return this.state;
  }
  next() {
    switch(this.state) {
      case 'red':    this.state = 'green';  break;
      case 'green':  this.state = 'yellow'; break;
      case 'yellow': this.state = 'red';    break;
      default: throw new Error(`Invalid state: ${this.state}`);
    }
  }
  toString() {
    return this.getName() + ' is ' + this.getState();
  }
}

let trafficLight = new TrafficLight('North Ave and Peachtree');

console.log(trafficLight.toString());
trafficLight.next();
console.log(trafficLight.toString());
trafficLight.next();
console.log(trafficLight.toString());
