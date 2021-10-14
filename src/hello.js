//let sayHello = (name) => `Hello, ${name}!`;

//console.log(sayHello(process.argv[2]));

//exemplul meu de functie arrow ce am incercat
// După ce ai urmărit videoclipul și ai testat exemplul,
//implemetează o funcție arrow care primește ca parametru
//un array de string și îmi returnează un singur string obținut prin concatenarea string-urilor din array-ul primit ca parametru.
let functiaMea = (arr) => {
  let vect = '';
  for (let string of arr) {
    vect += string;
  }

  return vect;

  // return arr.join();
};

let arr = [` am `, ` mancat`, ` ceva`];

console.log(functiaMea(arr));
