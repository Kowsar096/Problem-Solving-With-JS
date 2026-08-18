// 3 --> 3*3 = 9
// 4 --> 4*4 = 16
// 5 --> 5*5 = 25
// we can declare multiple parameter
// they cannot be accessed outside of that function.

function squares(number) {
    console.log('value of the parameter: ', number);
    const square = number * number;
    console.log('Square of the number: ', square);

}
squares(10);

squares(11);

console.log('----------------')
function add(num1, num2) {
    const sum = num1 + num2;
    console.log('Sum of the number: ', sum);

}

add(5, 34);

add(32, 90);