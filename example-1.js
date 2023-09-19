/*Example 1 - Body mass index

Write a function `calcBMI(weight, height)` that calculates and returns the body mass
index of a person. To do this, divide the weight in kilograms by
square of a person's height in meters.

The weight and height will be specially passed as strings. Non-integer numbers can be
specified as `24.7` or `24.7`, i.e. a comma can be usedas a decimal separator.

Body mass index must be rounded to one decimal place;
*/


/*
  ^Function expression:
  ^ --> declararea unei variabile ce are drept valoare o functie
  ^ --> functia poate fi apelata doar dupa ce a fost creata
  ^ --> necesita return --> transfera valoarea rezultatului functiei catre variabila
*/

function calcBMI(weight, height) {
  const parsedWeight = Number(weight.replace(",", "."));
  const parsedHeight = Number.parseFloat(height);
  
  const result = (parsedWeight / Math.pow(parsedHeight, 2)).toFixed(1);

  return result;
}

const bmi = calcBMI('88,3', '1.75');
console.log(`BMI este: ${bmi}`);



/*
  ^Function declaration:
  ^ --> poate fi apelata si inainte, si dupa ce a fost creata
  ^ --> console.log(), in interiorul functiei --> nu necesita return, neaparat
  ^ --> return, in interiorul functiei --> console.log() pt apelare, in afara functiei
*/

// calcBMI("88,3", "1.75"); // functia apelata inainte de a fi creata //

// function calcBMI(weight, height) {
//   const parsedWeight = Number(weight.replace(",", "."));
//   const parsedHeight = Number(height.replace(",", "."));

//   const result = (parsedWeight / Math.pow(parsedHeight, 2)).toFixed(1);

//   console.log(`BMI este: ${result}`);
// }

// calcBMI("88,3", "1.75"); // functia apelata dupa ce a fost creata //