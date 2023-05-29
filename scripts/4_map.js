// Map

const products = [
    { name: 'Jaqueta', price: 150.99, category: 'Roupas' },
    { name: 'Camisa', price: 35.99, category: 'Roupas' },
    { name: 'Fogão', price: 400, category: 'Eletro' },
    { name: 'Geladeira', price: 450, category: 'Eletro' },
]

products.map((product) => {
    if(product.category === 'Roupas'){
        product.onSale = true
    }
})

// console.log(products)