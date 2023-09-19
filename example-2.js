/*Example 2 - Smaller of numbers

Write a function min(a,b) that returns the smaller of the numbers a and b.
*/


/*
  ^Function declaration:
  ^pot fi folosite toate versiunile de mai jos
*/
function min(a, b) {
  if (a !== b) {
    return (Math.min(a, b))
  }
}

console.log(min(10, 50));



/*
  ^Function expression:
  ^version 1: else...if
*/
// function choseMinNumber(a, b) {
//   if (a > b) {
//     return b;

//   } else if (a < b) {
//     return a;

//   } else {
//     return `Numers are equals --> a:${a} = b:${b}`;
//   }
// }

// const min = choseMinNumber(10, 50);
// console.log(min)



/*
  ^Function expression:
  ^version 2: ternary operator
*/
// function choseMinNumber(a, b) {
//   if (a !== b) {
//     const result = a > b ? b : a;
//     return result;

//   } else {
//     return `Numers are equals --> a:${a} = b:${b}`;
//   }
// }

// const min = choseMinNumber(10, 50);
// console.log(min);



/*
  ^Function expression:
  ^version 3: Math.min()
*/
// function choseMinNumber(a, b) {
//   if (a !== b) {
//     const result = Math.min(a, b);
//     return result;

//   } else {
//     return `Numers are equals --> a:${a} = b:${b}`;
//   }
// }

// const min = choseMinNumber(10, 50);
// console.log(min);