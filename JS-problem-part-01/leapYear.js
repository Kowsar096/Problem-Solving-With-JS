/**
 * year will be a leap year if the year is divisible by 4
 */

// simple logic

function isLeapYear (year){
    if(year % 4 ===0){
        return true;

    }
    else{
        return false;

    }
}
const isLeap = isLeapYear(2211);
console.log(isLeap);
/**
 * 1. those year that is not divisible by 100 and if the year is divisible by 4:
 * then it will be leap year
 * 
 * 2. 
 */

function isLeapYear2(year){
    if (year % 100 !== 0 && year % 4 === 0){

        return true;

    }
    else if (year % 100 === 0 && year % 400 === 0){
        return true;

    }
    else {
        return false;
    }
}

const isLeap2 = isLeapYear2(1920);
console.log(isLeap2);
