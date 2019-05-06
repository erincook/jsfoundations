function fact(n) {
  return n === 1 ? 1 : n * fact(n-1);
}

console.log('The factorial of 5 is', fact(5));

