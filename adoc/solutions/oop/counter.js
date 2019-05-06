// unsafeCounter has no protection for its cnt variable
var simpleCounter = {
  cnt:         0,
  get:       function()     { return this.cnt;   },
  set:       function(val)  { this.cnt = val;    },
  increment: function()     { return ++this.cnt; }
};

simpleCounter.increment();
simpleCounter.cnt = 27;
console.log('simpleCounter: ' + simpleCounter.get());

// A Safer Counter
var counter = function() {
  var cnt = 0;
  return {
    get:       function()     { return cnt;   },
    set:       function(val)  { cnt = val;    },
    increment: function()     { return ++cnt; }
  };
}();

console.log("typeof counter: " + typeof counter);
console.log("counter: " + counter);
for (prop in counter) {
  console.log('prop: ' + prop);
}

for (var i=0; i<5; i++) {
  counter.increment();
  console.log("counter: " + counter.get());
}

counter.set(100);
console.log("counter: " + counter.get());

