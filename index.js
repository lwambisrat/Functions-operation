//1 return length of array
function getStringLengths(strings) {
  return strings.map(str => str.length);
}

// Example usage:
const stringArray = ["lwam", "danait", "jerry"];
const lengths = getStringLengths(stringArray);
console.log({lengths}); 

// 2. Function filtering odd and getting even
function inputNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

// E.g
const number = [100, 101, 103, 456, 534, 665, 897, 988, 899, 375];
const evenNumbers =inputNumbers(number);
console.log({evenNumbers}); 

// 3. Function getting name with score>75
function getTopStudents(students) {
  return students
    .filter(student => student.score > 75)
    .map(student => student.name);
}

// E.g
const studentArray = [
  { name: "lwam", score: 85 },
  { name: "danait", score: 70 },
  { name: "karan", score: 92 },
  { name: "mildred", score: 68 },
  { name: "linn", score: 78 },
];
const topStudents = getTopStudents(studentArray);
console.log({topStudents}); 

// 4. Function squaring each number in an array using map()
function square(numbers) {
  return numbers.map(num => num * num);
}

// E.g
const numbersToSquare = [2, 3, 5, 6, 7];
const squaredNumbers = square(numbersToSquare);
console.log({squaredNumbers}); 

// 5. Filter function to string and change to upper case
function getStringArray(mixedArray) {
  return mixedArray
    .filter(item => typeof item === 'string')
    .map(str => str.toUpperCase());
}

// E.g 
const mixedData = [10, "Adalab", true, "Ready", 25, "learning"];
const processedStrings = getStringArray(mixedData);
console.log(processedStrings); 