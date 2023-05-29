// Classes

class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }
    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}


class ProductWithAttributes extends Product {
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors(){
        console.log("As cores são: ")
        this.colors.forEach(color => {
            console.log(color)
        });
    }

}

const hat = new ProductWithAttributes("Chapéu", 200, ["Verde", "Azul", "Preto"])
// hat.showColors()