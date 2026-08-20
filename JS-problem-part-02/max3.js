const jim = 96;
const tim = 90;
const kim = 56;

if (jim > tim && jim > kim) {
    console.log('jim is the boss');

}
else if (tim > jim && tim > kim) {
    console.log('tim is the boss');
}
else {
    console.log('kim is the boss')
}

// using function
function maxOfThree(num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {
        return num1;

    }
    else if (num2 > num1 && num2 > num3) {
        return num2;

    }
    else {
        return num3;
    }
}

const max3 = maxOfThree(20, 56, 32);
console.log(max3);

// unlimited number

const max = Math.max(12, 1, 23, 89, 65, 45, 76);
console.log('max number: ', max);