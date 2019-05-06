function delay(cb, timeToWait = 1000) {
  setTimeout(cb, timeToWait);
}

function log(message) {
  const d = new Date();
  const ds = d.getHours() + ':'
    + d.getMinutes() + ':'
    + d.getSeconds() + ':'
    + d.getMilliseconds();
  console.log(ds + ':', message);
}

module.exports = { delay, log };
