/**
 *  objective: write a function to give me the sum of all number in an array
 *  step-01: declare a function
 *  step-02: call check whether the function is called properly
 *  step-03: set a parameter(s)
 *  step-04: pas the parameter(s), check weather parameter is passed in proper format
 *  step-05: do the function task (step by step)
 * 
 */

function sumOfNumber(number) {
    let sum = 0;
    for(const numbers of number){
        console.log(numbers);
        sum = sum + numbers;
    }
    return sum;
}

const numbs = [54, 62, 12, 6];
const sum = sumOfNumber(numbs);
console.log('Sum of number is : ', sum);