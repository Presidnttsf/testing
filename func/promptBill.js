import prompt_sync from "prompt-sync";
const prompt = prompt_sync({ sigint: true });

export function printBill() {
    let count = prompt('Enter the number of product: ')
    console.log('count products number :', count);
    let collectionOfProduct = [];
    let productTotal = 0;
    let discount = 0;
    for (let index = 0; index < count; index++) {
        const productName = prompt('Enter name of product: ' + (index + 1) + ": ");
        const productPrice = prompt('Enter price of product: ' + (index + 1) + ": ");
        productTotal += Number(productPrice)
        collectionOfProduct.push(productName, productPrice)


    }
    let gst = productTotal * 0.18
    let totalWithGst = productTotal + gst
    if (productTotal >= 5000) {
        discount = totalWithGst - (productTotal * 0.10)
    }



    console.log(collectionOfProduct)
    console.log('Product Total = ', 'RS.', productTotal.toFixed(2));
    console.log('GST 18% =', 'RS.', gst.toFixed(2));
    console.log('Total Amount =', 'RS.', totalWithGst.toFixed(2));
    console.log('Discount =', 'RS.', (productTotal * 0.10).toFixed(2))
    console.log('Discounted Total =', 'RS.', discount);

}

