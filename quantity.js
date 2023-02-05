const shoppingCart = [
    { name: 'shoe',price:1200, quantity: 5},
    { name: 'shirt',price:2200,    quantity: 2},
    { name: 'Pant',price:3700, quantity: 4},
    { name: 'Belt',price:700,  quantity: 3}
]

function totalCost(products) {
    let totalCost = 0;

    for (let i = 0; i < products.length; i++){
        const product = products[i];
        let costPerProduct = product.price * product.quantity;
        totalCost = totalCost + costPerProduct;
    }
    return totalCost;
}

const result = totalCost(shoppingCart);
console.log('Total Expense Today:', result);