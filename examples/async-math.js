function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
};

(async function(x) {     // async function expression used as an IIFE
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + await a + await b;       // a and be are processed concurrently
})(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds (concurrent execution).
});

var add = async function(x) {     // async function expression assigned to a variable
  var a = await resolveAfter2Seconds(20);  // await causes blocking
  var b = await resolveAfter2Seconds(30);  // b is processes after a is resolved (sequentially)
  return x + a + b;
};

add(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds (sequential execution).
});
