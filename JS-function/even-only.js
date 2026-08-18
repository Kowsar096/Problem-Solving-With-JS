/**
 * create a function that will return only the even numbers
 * return thr sum of even number
 */

function evenNumbersOnly(numbers) {
    const evens = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            evens.push(number);
        }
        
    }
    return evens;

}

const numbers = [5, 1, 4, 5, 6, 7, 8, 9, 5, 2, 4, 1, 6];
const evens = evenNumbersOnly(numbers);
console.log(evens);