console.log('********sum+1********')
function case1(a) {
    let sum = 0;


    for (let index = 0; index <= 5; index++) {
        sum + 1;


        console.log('sum', sum)
    }
    return sum;
};


console.log(case1())
console.log('********sum++********')

function increment(a) {
    let sum = 0;

    for (let index = 0; index < 5; index++) {
        // sum = sum + 1;
        //or
        // sum++;
        // or
        sum += 1;


        console.log(index, sum)
    }
    return sum;
};


console.log(increment());
