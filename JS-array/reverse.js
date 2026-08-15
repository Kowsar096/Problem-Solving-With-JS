const number = [1, 2, 3, 4, 5];
// reverse = [5, 4, 3, 2, 1]

const reversed = [];
for (let i = 0; i < number.length; i++){
    console.log(number[i]);
    reversed.unshift(number[i]);
}
console.log(reversed);

// This method mutates the array and returns a reference to the same array.

number.reverse();
console.log(number);