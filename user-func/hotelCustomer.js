import prompt_sync from "prompt-sync";

const prompt = prompt_sync({ sigint: true });

export function hotelCustomer() {
    const count = prompt("Enter Number of customer: ");
    console.log('Number of customer : ', count);

    let sum = 0;


    for (let index = 0; index < count; index++) {
        const product = prompt("Enter product: ");
        // console.log('your price is : ', product);

        const quantity = prompt("Enter quantity :  ")
        console.log("your quantity is ", quantity)

        const price = prompt("Enter price: ");

        let qtyPrice = Number(price) * Number(quantity)
        console.log('your price is : ', qtyPrice);

        let discount = 0;
        if (Number(quantity) > 2) {

            discount = qtyPrice * 0.05;
            console.log('discount : ', discount)

        }
        sum += qtyPrice - discount;

        // const gst = sum * 0.18
    }
    const gst = Number(sum * 0.18)
    const amount = Number(gst + sum)




    console.log("your sum is ", sum)
    console.log("gst added is : ", gst)
    console.log("total amount with discount is ", amount)

}

hotelCustomer()