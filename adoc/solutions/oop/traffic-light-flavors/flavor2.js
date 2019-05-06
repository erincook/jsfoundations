// Constructor Function with Prototype Methods
function TrafficLight(name) {
  this.name = name;
  this.state = 'red';
}

TrafficLight.prototype.getName  = function() { return this.name; };
TrafficLight.prototype.getState = function() { return this.state; };
TrafficLight.prototype.next = function() {
  switch(this.state) {
    case 'red':    this.state = 'green';  break;
    case 'green':  this.state = 'yellow'; break;
    case 'yellow': this.state = 'red';    break;
    default: throw new Error(`Invalid state: ${this.state}`);
  }
};
TrafficLight.prototype.goYellow = function() { this.state = 'yellow'; };
TrafficLight.prototype.goRed    = function() { this.state = 'red'; };
TrafficLight.prototype.toString = function() { return this.getName() + ' is ' + this.getState(); }

let trafficLight = new TrafficLight('Peachtree and North Ave');

console.log(trafficLight.toString());
trafficLight.next();
console.log(trafficLight.toString());
trafficLight.next();
console.log(trafficLight.toString());
