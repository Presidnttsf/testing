
export function isPrime(a) {
    for (let index = 2; index < Math.ceil(a / 2); index++) {
        let num = a % index
        if (num == 0) {
            return false
        }
    }
    return true
}






