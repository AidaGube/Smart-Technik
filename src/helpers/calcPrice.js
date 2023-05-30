export function calcSubPrice(product) {
    return product.count * product.item.price
}

export function calcTotalPrice(products) {
    let totalPrice = 0;
    products.forEach(elem => {
        totalPrice += elem.subPrice;
    })
    return totalPrice;
}