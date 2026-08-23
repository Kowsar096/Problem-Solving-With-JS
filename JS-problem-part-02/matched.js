const numbers = [45, 65, 32, 35, 52];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// simplicity version
console.log('---------')
for (const number of numbers) {
    console.log(number);
}

const products = [
    { id: 1, name: 'Xiomi Phone', price: 39000 },
    { id: 2, name: ' IPhone', price: 89000 },
    { id: 3, name: 'Lenovo Laptop', price: 159000 },
    { id: 4, name: 'One plus', price: 49000 },
    { id: 5, name: 'Symphony Phone', price: 19000 },
    { id: 6, name: 'Vivo Phone', price: 29000 },
    { id: 7, name: 'Samsung Phone', price: 129000 },
];

// for (const product of products){
//     console.log(product);
// }

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'Phone');
console.log(result);