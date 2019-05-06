// Object Literal
let trafficLight = {
  name     : 'Peachtree and North Ave',
  state    : 'red',
  getName  : function() { return this.name;      },
  getState : function() { return this.state;     },
  next: function() {
    switch(this.state) {
      case 'red':    this.state = 'green';  break;
      case 'green':  this.state = 'yellow'; break;
      case 'yellow': this.state = 'red';    break;
      default: throw new Error(`Invalid state: ${this.state}`);
    }
  },
  toString : function() { return this.getName() + ' is ' + this.getState(); }
};

console.log(trafficLight.toString());
trafficLight.next();
console.log(trafficLight.toString());
trafficLight.next();
console.log(trafficLight.toString());
