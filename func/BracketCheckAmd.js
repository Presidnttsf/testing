export function BrCheckAmd(string) {
    // let openArr = ['(', '{', '['];
    // let closeArr = [')', '}', ']'];
    //     let obj = {
    //         '(': ')',
    //         '[': ']',
    //         '{': '}',

    //     }
    //     let openArr = Object.keys;
    //     let closeArr = Object.values;
    //     let stack = [];
    //     for (let index = 0; index < string.length; index++) {
    //         const e = string[index];
    //         if (openArr.includes(e)) {
    //             stack.push(e)
    //         }
    //         if (closeArr.includes(e)) {
    //             let a = stack.pop();
    //             if (e != obj[a])

    //                 return false;
    //         }

    //     }
    //     return stack.length === 0;

    // }

    let obj = {
        '[': ']',
        '{': '}',
        '(': ')',
    }
    let openarr = Object.keys(obj)
    let closearr = Object.values(obj)

    let Stack = []

    for (let index = 0; index < string.length; index++) {
        const e = string[index];
        if (openarr.includes(e)) {
            Stack.push(e)
        }

        if (closearr.includes(e)) {

            let a = Stack.pop()
            console.log(Stack.pop(), obj[a])
            if (e != obj[a]) {

                return (false)
            }
        }
    }
    return Stack.length === 0;
}


console.log(BrCheckAmd('{[()]'))

let tsf = {
    name: "tauseef",
    city: 'nagpur',

}
let a= 'name'
console.log(tsf[a])


