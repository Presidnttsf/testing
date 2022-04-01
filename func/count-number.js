export function countnumber(n) {
    let count = 0;

    while (n > 0) {

        count++

        n = Math.floor(n / 10)

    }
    return count
}

console.log(countnumber(12345678))

function count(n) {
    let count = 0;
    for (; n > 0;) {

        if (n > 0) {
            n = Math.floor(n / 10)
            count += 1

        }

    }
    return count;
}
console.log(count(12345678));







function myCount(n) {
    let string = n.toString().length
    return string;
}

console.log(myCount(12345678))