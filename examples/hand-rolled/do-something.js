const Promise = require('./promise');

function doSomething() {
  return new Promise(function(resolve) {
    var value = 42;
    resolve(value);
  });
}

doSomething().then( v => console.log(v) );
