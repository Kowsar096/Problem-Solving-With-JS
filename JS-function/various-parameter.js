/**
 * for a given string tell me weather it has even number of character or not
 * 
 */

function evenSizeStr(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log('Even size');
        return true;

    }
    else {
        console.log('Odd size');
        return false;
    }


}

evenSizeStr('Dhaka');

function doubleOrTriple(number, doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }

}
console.log('------Do Double or Triple------');
console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));

// array and function

function numberOfElements(numbers) {
    const len = numbers.length;
    return len;

}
numberOfElements([12, 21, 89, 65, 52, 1, 7, 2]);