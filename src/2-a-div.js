function checkDivisible(n, divisor) {
  if (n % divisor) {
    return false;
  } else {
    return true;
  }
}

console.log(checkDivisible(10, 2));
console.log(checkDivisible(10, 3));

//AM RULAT IN VISUAL STUDIO CODE SI MERGE

function checkNrCharDif(a, b) {
  if (a.length !== b.length) {
    return -1;
  }
  let nr = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      nr++;
    }
  }
  return nr;
}

console.log(checkNrCharDif(`ana`, 'ana'));
console.log(checkNrCharDif(`ansdfdsfdfdga`, 'aa'));
