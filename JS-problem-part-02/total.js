


const products = [
    {name: 'shampoo', price: 300},
    {name: 'shirt', price: 700},
    {name: 'pant', price: 1050},
    {name: 'grocery', price: 750}
];

function getShoppingTotal(products){
    let total = 0;

    for(const product of products){
        total = total + product.price;
    }
    return total

}

const total = getShoppingTotal (products);
console.log('Total cost: ', total);