// Setup Code

const utils = require('./utils');

function greeting(cb) {
  const value = 'Hello';
  utils.delay( () => cb(value));
}

function name(cb) {
  const value = 'Orange Method';
  utils.delay( () => cb(value));
}

function ending(cb) {
  const value = '!';
  utils.delay( () => cb(value));
}

// Example Code

utils.log('START');
greeting( (g) => {
  name( (n) => {
    ending( (e) => {
      utils.log(g + ', ' + n + e);
      utils.log('DONE');
    });
  });
});
utils.log('BOTTOM');
