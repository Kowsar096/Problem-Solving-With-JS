
/**
 *  function takes an array as parameter
 *  give me the average of the odd numbers in the array
 * 
 */

function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers){
        // console.log(number);

        if(number % 2 ===1){
            // console.log(number);
            odds.push(number);

        }

    }
    // odds is the array that contains only the odds number

    console.log(odds);
    let sum = 0;

    for(const number of odds){
       sum = sum + number;
       
    }
    console.log('sum: ' ,sum);
    const count = odds.length;
    console.log( 'count: ',count);
    const avg = sum / count;
    return avg;
}

const numbers = [42, 42, 45, 65, 34, 13, 24, 76, 89];
const avg = oddAverage(numbers);
console.log('average of the odd number: ' ,avg);
