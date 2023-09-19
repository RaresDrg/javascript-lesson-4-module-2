/* Example 9 -Collection of courses (includes, indexOf, push, etc.)

Write functions to work with the `courses` collection of training courses:

- `addCourse(name)` - adds a course to the end of the collection
- `removeCourse(name)` - removes a course from the collection
- `updateCourse(oldName, newName)` - changes the name to a new one
*/


const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
console.log(courses)


function addCourse(name) {
  if (!courses.includes(name)) {      // sau: courses.indexOf(name) === -1 //
    courses.push(name);
    return
  } 
  
  console.log("You already have this course");
}

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // ' You already have this course'



function removeCourse(name) {
  if (courses.includes(name)) {       // sau: courses.indexOf(name) !== -1) //
    courses.splice(courses.indexOf(name), 1);
    return
  }
  
  console.log("Course with this name was not found");
}

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Course with this name was not found'



function updateCourse(oldName, newName) {
  if (courses.includes(oldName)) {         // sau: courses.indexOf(name) !== -1) //
    courses.splice(courses.indexOf(oldName), 1, newName);
    return
  } 

  console.log("Course with this name was not found");
}

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']