const utils = require('./utils');

// let's setup a function that returns a promise and resolves it in the future.
function getAnswer() {
  return new Promise( (resolve, reject) => {
    utils.delay( () => resolve(42), 2000 );
  });
}

// if you have any async code, declare the function containing your async code with the `async` keyword
// const getAnswerToEverything = async () => {
async function getAnswerToEverything() {
  // use `await` to signify that we should wait for the async code to complete (resolves the promise)
  console.log('getting the answer...');
  const answer = getAnswer();
  console.log(`The answer is ${await answer}.`);
};

getAnswerToEverything();
console.log('We are done.');
