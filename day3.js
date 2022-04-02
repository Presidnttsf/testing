// **** Boolean
// Datatype


// let a= '10';
// let b = 10;

// console.log("Type of A", typeof a);
// console.log("Type of B", typeof b);

// console.log("A === B", a===b);
// console.log("A !== B", a!==b);
// console.log("A == B", a==b);
// console.log("A != B", a!=b);


// Print the following
// One Plus 1 
// One Plus 2 
// One Plus 3 
// One Plus 4 
// One Plus 5 
// One Plus 5t
// One Plus 6 
// One Plus 6t
// One Plus 7 
// One Plus 7t
// One Plus 7 Pro
// One Plus 7 Nord
// One Plus 8 
// One Plus 8t

// let end = 8;
// for (let index = 1; index <= end; index++) {
//     console.log("One Plus", index);
//     if (index > 4) {
//         console.log("One Plus", index, "t");
//     }
//     }

function avg(nums) {

    let sum = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        sum = sum + element;

    }
    return (sum / (list.length));
}

let list = [99.20, 94, 98.10, 95, 100];

console.log(avg(list));
