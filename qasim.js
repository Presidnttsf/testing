// import { areaOfRectangle } from "./func/area-of-recatangle.js";
// console.log(areaOfRectangle(10, 20))



// import { countnumber } from "./func/count-number.js";
// console.log(countnumber(9365))
// import { cumulativeSum } from "./func/cumulative-sum.js";
// console.log(cumulativeSum(2, 3))

// import { circleVSsquare } from "./func/diameter-side.js";
// console.log(circleVSsquare(10, 10))

// import { numberBetweenPrime } from "./func/num-between-prime.js";
// import { abc } from "./func/temp.js";


// import { RotateArray } from "./func/rotate-array.js";
// console.log(RotateArray([3, 6, 9, 5, 5]))
// // function chek100(x, y) {
//     let a = x + y;
//     console.log(a)
//     if (a < 100) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(chek100(50, 20))


function pcm(phy, chem, math) {

    let a = phy + chem + math;
    let b = (a / 300) * 100
    return b

}

console.log(pcm(90, 80, 90))




function tar(arr) {

    arr = arr + "";
    return arr.split('').reverse().join('')
}
console.log(Number(tar(123456)));

