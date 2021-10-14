const checkPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      return false;
    }
  }
  return true;
};

if (process.argv.length < 3) {
  console.log(`not enough params`);
} else {
  console.log(checkPrime(parseInt(process.argv[2])));
}

// implementează o funcție care calculează elementul
//de un anumit ordin al șirului lui Fibonacci, primind acest ordin ca parametru de linie de comandă.
