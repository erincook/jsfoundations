const utils = require("./utils");

// Setting Up the Promises

function greeting() {
  return new Promise((resolve, reject) => {
    utils.delay(() => resolve("Hello"));
  });
}

function name() {
  return new Promise((resolve, reject) => {
    utils.delay(() => resolve("Orange Method"));
  });
}

function ending() {
  return new Promise((resolve, reject) => {
    utils.delay(() => resolve("!"));
  });
}

// Example 1 - Sequential Execution - no Chaining

greeting().then(g => {
  name().then(n => {
    ending().then(e => {
      utils.log("E1: " + g + ", " + n + e);
    });
  });
});

// Example 2 - Sequential Execution with Chaining
let message;
greeting()
  .then(g => {
    message = g;
    return name();
  })
  .then(n => {
    message += ", " + n;
    return ending();
  })
  .then(e => {
    message += e;
    utils.log("E2: " + message);
  });

// Example 3 - Parallel Execution

Promise.all([greeting(), name(), ending()]).then(([g, n, e]) => {
  utils.log("E3: " + g + ", " + n + e);
});

// Example 4 - Mixed Parallel and Sequential

Promise.all([greeting(), name()]).then(([g, n]) => {
  ending().then(e => {
    utils.log("E4: " + g + ", " + n + e);
  });
});

// Example 5 - Another Mixed Parallel and Sequential

greeting().then(g => {
  Promise.all([name(), ending()]).spread((n, e) => {
    utils.log("E5: " + g + ", " + n + e);
  });
});
