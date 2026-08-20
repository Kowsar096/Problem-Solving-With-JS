const disha = 56;
const salman = 76;
if (disha > salman) {
    console.log('Disha will get the strawberry');

}
else {
    console.log('salman will eat the strawberry');

}

// inside a function

function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;

    }
    else {
        return num2;
    }
}

const max = getMax(56, 76);
console.log('Max of two is: ', max);
