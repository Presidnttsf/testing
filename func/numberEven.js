export function numberIsEven(a) {
    let num = a % 2
    if (num == 0) {
        console.log("The number is even.");
    }
    else {
        console.log("The number is not even");
    }
    return num;
}

