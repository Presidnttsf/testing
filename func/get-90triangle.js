export function print90Triangle(n) {
    let string = '';
    for (let index = 0; index <= n; index++) {

        for (let j = 0; j <= index; j++)
            string += j + ' ';
        console.log('index', index, string)

        string = '';

    }

}

print90Triangle(9);