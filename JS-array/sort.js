const number = [6, 4, 1, 8, 5, 7, 0];

console.log(number);
number.sort();
console.log(number);
const age = [16, 114, 1, 28, 53, 27, 10];

console.log(age);
age.sort(); // its convert any number in a string
console.log(age);

const sorted_ages = age.sort(function (a, b) { return a - b });
console.log(sorted_ages);

console.log('Descending')
const sorted_ages_des = age.sort(function (a, b) { return b - a });
console.log(sorted_ages_des);