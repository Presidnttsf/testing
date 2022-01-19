import prompt_sync from "prompt-sync";
const prompt = prompt_sync({ sigint: true });

export function printBill() {
    let count = prompt('Enter the number of product: ')
    console.log('count products number :', count);
    let productTotal = 0;
    for (let index = 0; index < count; index++) {
        const productName = prompt('Enter name of product: ' + (index + 1) + ": ");
        const productPrice = prompt('Enter price of product: ' + (index + 1) + ": ");
        productTotal += Number(productPrice)



    }
    let gst = productTotal * 0.18
    let totalWithGst = productTotal + gst
    console.log('productTotal: ', productTotal.toFixed(2));
    console.log('gst:', gst.toFixed(2));
    console.log('totalWithGst: ', totalWithGst.toFixed(2));




}