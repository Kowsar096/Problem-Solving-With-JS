function multiply ( num1, num2){

    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a number'
    }
    const mul = num1 * num2;
    return mul;

}

// const result = multiply (5,'seven'); //NaN
const result = multiply ('five',7)
console.log(result); 

function fullName (first, second){
    if(typeof first !== 'string' || typeof second !== 'string'){
        return 'Name should be string'
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName(5, 'Khan');
console.log(full);