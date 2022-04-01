// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

function NegetiveVal(arr) {
    //     let count = 0;
    //     for (let index = 0; index < array.length; index++) {
    //         const element = array[index];
    //         if(element<0){
    // count++

    //         }
    //     }
    //     return count;
    return arr.filter((el) => el < 0).length;

}
console.log(NegetiveVal([1, -2, -4, 3, 8, -9]));