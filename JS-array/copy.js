let price = 25;
let comp_price = price;

price = 20; // update the price value and don't effect on comp_price value

console.log(price);
console.log(comp_price);


const product = [25, 30, 35];
const compt_product = [];

// you cant copy in this way properly
// compt_product[0] = 15;

// product[1] = 96;

// using loop you can copy

for (const p of product) {
    compt_product.push(product);
}

// than change the value
product[0] = 15;

console.log(product);

console.log(compt_product);


const numbers = [1, 2, 3, 4, 5, 6, 7];

// concat

const new_number = [].concat(numbers);

new_number.push(8);

console.log(numbers);
console.log(new_number);