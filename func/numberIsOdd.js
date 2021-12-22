export function numberIsOdd(a) {
    let num = a % 2
    if (num == 0) {
        console.log("The number is not Odd.");
    }
    else {
        console.log("The number is Odd");
    }
    return num;
}