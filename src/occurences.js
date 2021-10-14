//function occurences(text, character) {
/*let count = 0;
  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === character) {
      count++;
    }
  }
  return count;*/
//  return text.split(character).length - 1;
//}

//ca lamba expression
let occurences = (text, character) => text.split(character).length - 1;

console.log(occurences(`sample text`, `e`));

//implementează o funcție care primește ca parametru o listă de numere
//și returnează un array conținând acele numere.
let array1 = [1, 2, 3, 4, 5];
let array2 = ['a', 'b', 'c', 'd', 'e'];

let result = array1.map((element, index) => [element, array2[index]]).flat();

console.log(result);
