let fruits = {
    apples: {
        price: .20,
        total: 16
    },
    pears: {
        price: .80,
        total: 21
    }
};

let totalPrice = 0;

for (let fruit in fruits) {
    totalPrice = totalPrice + (fruits[fruit].price * fruits[fruit].total) ;
}