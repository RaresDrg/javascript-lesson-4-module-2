/*Example 6 - Finding the largest element

Write a function findLargestNumber(numbers) that looks for the largest number in array.
*/

/*
  ^Math.max()
*/
// function findLargestNumber(numbers) {
//   const message = `largest number is: ${Math.max(...numbers)}`;

//   return message;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findLargestNumber([49, 4, 7, 83, 12]));


/*
  ^for...of
*/

function findLargestNumber(numbers) {
  let largerNumber = numbers[0];

  for (const number of numbers) {
    if (largerNumber < number) {
      largerNumber = number;
    }
  }

  const message = `largest number is: ${largerNumber}`;
  console.log(message)
}

findLargestNumber([2, 17, 94, 1, 23, 37]);
findLargestNumber([49, 4, 7, 83, 12]);