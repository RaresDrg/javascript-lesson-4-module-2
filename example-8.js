/* Example 8 - Time Formatting

Write a function `formatTime(minutes)` that will translate the value of `minutes`
(number of minutes) to a string in hour and minute format `HH:MM`.
*/


function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  // console.log(hours);
  // console.log(minutes);

  const doubleDigitHours = hours.toString().padStart(2, 0);
  const doubleDigitMinutes = minutes.toString().padStart(2, 0);
  // console.log(doubleDigitHours);
  // console.log(doubleDigitMinutes);

  const time = `Timplul este: ${doubleDigitHours}:${doubleDigitMinutes}`;
  
  return time;
}


console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"