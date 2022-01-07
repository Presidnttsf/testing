export function simtest() {
    let count = prompt("Enter Number mobile : ");
    console.log('Enter Number mobile number : ', count);

    if (count.startsWith('98')) {
        return 'idea'
    }
    if (count.startsWith('94')) {
        return 'BSNL'
    }
}