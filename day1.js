// // Variable decalration 
// let a = 22;
// let b = "22";

// // Print sum of a and b
// console.log("a + b =", a+b);
// console.log("a - b =", a-b);
// console.log("a * b =", a*b);
// console.log("ab", a*b)
// console.log("a = b", a==b)
// console.log(a%b)
// console.log(a!=b)
// // let number = 87; 
// // let end = 10;
// // for (let index = 1; index <= end; index++) {
// // console.log(number,'x',index, "=", number*index);    
// // }
// // let end = 8;
// // for (let index = 1; index <= 8; index++) {
// //     console.log("One Plus", index);
// //     if (index >= 5) {
// //         console.log("One Plus", index, "t");
// //         if (index == 7) {
// //             console.log("One Plus", index, "Pro",);
// //             console.log("One Plus", index, "Nord");

// //         }

// //     }
// // }

function avg(nums) {
    let sum = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        sum = sum + element;
    }
    return (sum / (nums.length));
}

let array = [99.90, 97.50, 100];

console.log(avg(array));

// function sum(num) {
//     let sum = 0;
//     for (let index = 0; index < num.length; index++) {
//         const element = num[index];
//         sum = sum + element;
//     }
//     return sum;
// }



// console.log(sum([10, 20, 50, 10]));