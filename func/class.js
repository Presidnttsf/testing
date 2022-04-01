// //Here we are learning how to create class in javascript

// class details {

//     constructor(name, age, address, city) {
//         this.naam = name;
//         this.umar = age;
//         this.pata = address;
//         this.saher = city;

//     }
//     speak() {

//         console.log(`This is ${this.naam}'s details`)
//     }


// }

// let wajid = new details('Wajid', 26, 'Takiya', 'Ngp')
// wajid.speak();
// let qasim = new details('Qasim', 24, 'Laskaribagh', 'Ngp')
// let tariq = new details('Tariq', 25, 'uppalwadi', 'Ngp')
// let zafar = new details('zafar', 25, 'SSb colony', 'Ngp')
// // let check = addition(10, 20)

// console.log(wajid, qasim, tariq, zafar)
// // console.log('ch', check)

// function pizzaMaker(base, topping, cheese, isVeg) {
//     return {
//         base,
//         topping,
//         cheese,
//         isVeg,
//         getPrice: function () {
//             console.log("Price is", isVeg ? 50 : 100)
//         }
//     }
// }

class PizzaMaker {
    constructor(base, topping, cheese, isVeg) {
        this.base = base;
        this.topping = topping;
        this.cheese = cheese;
        this.isVeg = isVeg;
    }
    getPrice() {
        console.log("Price is", this.isVeg ? 50 : 100)
    }
}

let p1 = new PizzaMaker("Thin", "Onion", "Extra", true);
let p2 = new PizzaMaker("Nomral", "Corn", "Normal", false);
let p3 = new PizzaMaker("Fresh Pan", "Capsicum", "Extra", true);

console.log(p1.getPrice());
console.log(p2.getPrice());
console.log(p3.getPrice());
console.log(p2);
console.log(p3);