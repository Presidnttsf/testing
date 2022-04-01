export function CountIn(arr, n) {
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == n)
            count = count + 1;
    }
    return count;
}

console.log(CountIn([1, 2, 3, 4, 2, 4, 6, 4], 4))