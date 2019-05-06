const Promise = require('bluebird');

function getRandomNumber() {
  return new Promise( (resolve, reject) => {
    const value = Math.random();
    if (value > 0.2) {
      console.log('  resolving with value:', value);
      resolve(value);
    }
    else {
      reject(new Error("I really don't like small numbers like " + value) );
    }
  });
}

Promise.all([
  getRandomNumber(),
  getRandomNumber(),
  getRandomNumber()
])
.spread( (num1, num2, num3) => {
  const avg = (num1 + num2 + num3) / 3;
  console.log('The average is:', avg);
})
.catch( err => console.log('ERROR:', err.message) );
