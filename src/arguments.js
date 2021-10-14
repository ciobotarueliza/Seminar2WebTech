function addToArray(array, ...args) {
  // let args = arguments;
  //  let array = args[0];
  for (var i = 0; i < args.length; i++) {
    array.push(args[i]);
  }
  return array;
}

let array = [`a`];

console.log(addToArray(array, `b`, `c`).join(`,`));

// implementează o funcție care primește ca parametrii
//două array-uri de aceeași lungime și returnează
//un array cu elementele din cele două surse intercalate

//rezolvare git
const fibbonaci = (order) => {
  switch (order) {
    case 0:
    case 1:
      return 1;
    default:
      return fibbonaci(order - 1) + fibbonaci(order - 2);
  }
};

if (process.argv.length <= 2) {
  console.log('Not enough arguments');
} else {
  console.log(fibbonaci(parseInt(process.argv[2])));
}
