let cartItem = {
    name: "Bread",
    price: 1400,
    quantity: 2,
    getTotal(){
        return this.price * this.quantity;
        
    }
}

console.log(cartItem.getTotal());

let cart = [
    {
    name: "Sardine",
    price: 2000,
    quantity: 2,
    getTotal(){
        return this.price * this.quantity;
    }
    },
    {
    name: "Pulpy Juice",
    price: 1400,
    quantity: 1,
    getTotal(){
        return this.price * this.quantity;
    }
    },
    {
    name: "Coca-cola",
    price: 500,
    quantity: 4,
    getTotal(){
        return this.price * this.quantity;
    }
    }

]

let getCartTotal = (cart) => {
   let total = 0;
    for (item of cart){
        total += item.getTotal();
    }

    console.log("The price of all the items in the cart is:", total);
}

getCartTotal(cart);
