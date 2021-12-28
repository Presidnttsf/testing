import { isPrime } from "./find-prime-num.js";
export function numberBetweenPrime(N1, N2) {

    let arr = []
    for (let index = N1; index < N2; index++) {

        let r = isPrime(index)
        if (r) {
            arr.push(index)
        }

    }
    return arr
}

