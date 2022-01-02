export function BubbleSorted(arr) {
    for (let j = 0; j < arr.length; j++) {

        for (let index = 0; index < arr.length - 1; index++) {
            if (arr[index] > arr[index + 1]) {
                let temp = arr[index]
                arr[index] = arr[index + 1]
                arr[index + 1] = temp
            }
        }
    }
    return arr;
}