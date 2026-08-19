/**
 * array has some duplicate value
 */

const number = [1, 2, 4, 1, 5, 7, 1, 4, 5, 1, 24, 5, 2, 14, 5, 2, 4, 2, 5];

function noDuplicate (array){
    // console.log(array);

    const unique = [];

    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(number);
console.log(uniqueArray);