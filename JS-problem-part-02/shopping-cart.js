const products = [
    {name: 'shampoo', price: 300 , quantity: 3},
    {name: 'shirt', price: 700 , quantity: 2},
    {name: 'pant', price: 1050 , quantity: 4},
    {name: 'grocery', price: 750 , quantity: 3}
];


function cartTotal(products){
    let total = 0;

    for(const product of products){
       const thisProductCost = product.price * product.quantity
       total = total + thisProductCost;
    }
    return total

}

const shoppingCost = cartTotal (products);
console.log('Total cost: ', shoppingCost);