# Traffic Light Flavors

Below are some various ways to implement a simple Traffic Light object in
JavaScript. Each implementation results in the same interface, an object with
a name and a state as well as the methods `getName`, `getState`, `goGreen`,
`goYellow`, and `goRed`.

## Flavor #1 - An Object Literal

This is a simple solution but is not very reusable.

```javascript
var trafficLight = {
  name     : 'Peachtree and North Ave',
  state    : 'red',
  getName  : function() { return this.name;      },
  getState : function() { return this.state;     },
  goGreen  : function() { this.state = 'green';  },
  goYellow : function() { this.state = 'yellow'; },
  goRed    : function() { this.state = 'red';    },
  toString : function() { return this.getName() + ' is ' + this.getState(); }
};
```

## Flavor #2 - A Constructor Function:

Constructor functions all us to create *lots* of traffic lights!

```javascript
function TrafficLight(name) {
  this.name = name;
  this.state = 'red';
}

TrafficLight.prototype.getName   = function() { return this.name; };
TrafficLight.prototype.getState  = function() { return this.state; };
TrafficLight.prototype.goGreen   = function() { this.state = 'green'; };
TrafficLight.prototype.goYellow  = function() { this.state = 'yellow'; };
TrafficLight.prototype.goRed     = function() { this.state = 'red'; };
TrafficLight.prototype.toString  = function() { return this.getName() + ' is ' + this.getState(); }

var trafficLight = new TrafficLight('Peachtree and North Ave');
```

## Flavor #3 - An IIFE that returns a Closure

An IIFE can be used to *protect* certain property values from being modified outside of the object's interface.

```javascript
var trafficLight = (function() {
  var state = 'red';
  var name  = 'Peachtree and North Ave';
  return {
    getName  : function() { return name;      },
    getState : function() { return state;     },
    goGreen  : function() { state = 'green';  },
    goYellow : function() { state = 'yellow'; },
    goRed    : function() { state = 'red';    },
    toString : function() { return this.getName() + ' is ' + this.getState(); }
  };
}());

// or

var trafficLight = (function(theName) {
  var state = 'red';
  var name  = theName;
  return {
    getName  : function() { return name;      },
    getState : function() { return state;     },
    goGreen  : function() { state = 'green';  },
    goYellow : function() { state = 'yellow'; },
    goRed    : function() { state = 'red';    },
    toString : function() { return this.getName() + ' is ' + this.getState(); }
  };
}('Peachtree and North Ave'));
```

## Flavor #4 - A Builder Function that returns a Closure

The builder function combines the reusability of constructor functions with
the protection of an IIFE (but it does not support inheritance).

```javascript
function buildTrafficLight(theName) {
  var state = 'red';
  var name  = theName;
  return {
    getName  : function() { return name;      },
    getState : function() { return state;     },
    goGreen  : function() { state = 'green';  },
    goYellow : function() { state = 'yellow'; },
    goRed    : function() { state = 'red';    },
    toString : function() { return this.getName() + ' is ' + this.getState(); }
  };
}

var trafficLight = buildTrafficLight('Peachtree and North Ave');
```

## Flavor #5 - A Constructor Function implemented with an IIFE

We can also use an IIFE inside of a constructor function so that we can be
Object Oriented and protect certain variables.

```javascript
function TrafficLight(theName) {
  var that = this;
  (function() {
    var name = theName;
    var state = 'red';
    that.getName  = function() { return name;      };
    that.getState = function() { return state;     };
    that.goGreen  = function() { state = 'green';  };
    that.goYellow = function() { state = 'yellow'; };
    that.goRed    = function() { state = 'red';    };
    that.toString = function() { return this.getName() + ' is ' + this.getState(); };
  }());
}

var trafficLight = new TrafficLight('Peachtree and North Ave');
```

## Flavor #6 - An IIFE that returns a Constructor Function

If we use an IIFE to return a Constructor Function, we can protect variables
at two levels. Therefore we can have protected shared variables and protected
instance variables. This is because the IIFE gets called only once when
creating the Constructor Function, but the Constructor can be called many
times.

```javascript
var TrafficLight = (function() {
  //  private stuff goes here, shared by all instances
  var RED = 'red', YELLOW = 'yellow', GREEN = 'green';

  return function(theName) {
    // per-instance private vars go here
    var name = theName;
    var state = RED;

    this.getName  = function() { return name;    };
    this.getState = function() { return state;   };
    this.goGreen  = function() { state = GREEN;  };
    this.goYellow = function() { state = YELLOW; };
    this.goRed    = function() { state = RED;    };
  };
})();

TrafficLight.prototype.toString = function() {
  return this.getName() + ' is ' + this.getState();
};

var trafficLight = new TrafficLight("Peachtree and North Ave");
console.log(trafficLight.toString());
```

## Flavor #7 - An ES-6 Class

```javascript
'use strict';

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
  goGreen()  {
    this.state = 'green';
  }
  goYellow() {
    this.state = 'yellow';
  }
  goRed()    {
    this.state = 'red';
  }
  toString() {
    return this.getName() + ' is ' + this.getState();
  }
}

let trafficLight1 = new TrafficLight('North Ave and Peachtree');
console.log(trafficLight1.toString());
trafficLight1.goYellow();
console.log(trafficLight1.toString());
trafficLight1.state = 'purple';
console.log(trafficLight1.toString());
```

## Flavor #8 - An IIFE that returns an ES-6 Class

```javascript
'use strict';

const TrafficLight = () => {
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
    goGreen()  {
      state = 'green';
    }
    goYellow() {
      state = 'yellow';
    }
    goRed()    {
      state = 'red';
    }
    toString() {
      return this.getName() + ' is ' + this.getState();
    }
  }
  return TrafficLight;
};

let trafficLight1 = new (TrafficLight())('North Ave and Peachtree');
console.log(trafficLight1.toString());
trafficLight1.goYellow();
console.log(trafficLight1.toString());
// the next line will not affect the behavior of the object due to
// the protection of the closure.
trafficLight1.state = 'purple';
console.log(trafficLight1.toString());
```
