// A Builder Function that returns a Closure
function buildTrafficLight(theName) {
  let state = 'red';
  let name  = theName;
  return {
    getName  : function() { return name;      },
    getState : function() { return state;     },
    next: function() {
      switch(state) {
        case 'red':    state = 'green';  break;
        case 'green':  state = 'yellow'; break;
        case 'yellow': state = 'red';    break;
        default: throw new Error(`Invalid state: ${state}`);
      }
    },
    toString : function() { return this.getName() + ' is ' + this.getState(); }
  };
}

let trafficLight = buildTrafficLight('Peachtree and North Ave');

console.log(trafficLight.toString());
trafficLight.next();
console.log(trafficLight.toString());
trafficLight.next();
console.log(trafficLight.toString());
