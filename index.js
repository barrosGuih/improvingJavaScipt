const prompt = require('prompt-sync')();

// Array para armazenar os produtos escolhidos
let shoppingCart = [];

// Criando a classe de produtos
class Products {
    constructor(id, name, price, validity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.validity = validity;
    }
}

// Instanciando produtos
let riceProduct = new Products(1, "Rice", 9.99, true);
let beanProduct = new Products(2, "Bean", 16.0, true);
let popcornProduct = new Products(3, "Popcorn", 3.49, false);

function marketFood() {
    console.log('Lista dos produtos \n');
    console.log(riceProduct);
    console.log(beanProduct);
    console.log(popcornProduct);

    let choiceClient = prompt("\nEscolha os seus produtos {1, 2 ou 3}: ");

    if (choiceClient == 1) {
        shoppingCart.push(riceProduct);
        console.log(`\nVocê escolheu ${riceProduct.name}, o valor é: R$${riceProduct.price}\n`);
    } else if (choiceClient == 2) {
        shoppingCart.push(beanProduct);
        console.log(`\nVocê escolheu ${beanProduct.name}, o valor é: R$${beanProduct.price}\n`);
    } else if (choiceClient == 3) {
        shoppingCart.push(popcornProduct);
        console.log(`\nVocê escolheu ${popcornProduct.name}, o valor é: R$${popcornProduct.price}\n`);
    } else {
        console.log('Produto não cadastrado!');
    }

    let moreProducts = prompt("Você deseja mais alguma coisa? {S=1 N=0}: ");

    if (moreProducts == 1) {
        marketFood();
    } else {
        ShoppingCart();
        console.log("Volte sempre!");
    }
}

function ShoppingCart() {
    console.log("\nCarrinho de Compras:");
    if (shoppingCart.length === 0) {
        console.log("Seu carrinho está vazio.");
    } else {
        let total = 0;
        shoppingCart.forEach(product => {
            console.log(`${product.name} - R$${product.price}`);
            total += product.price;
        });
        console.log(`O valor total da compra é: ${total.toFixed(2)}\n`);
    }
}

let welcomeClient = prompt('Bem-vindo! Você quer comprar? {S=1 N=0}: ');

if (welcomeClient == 1) {
    marketFood();
} else {
    console.log("Volte sempre!");
}
