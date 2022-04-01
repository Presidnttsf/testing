let arr = [2, 3, 6];

//expected out put shud be 4, 5, 8

// arr.map((e)=> {return e+2 })
let transform = arr.map(addition);
// console.log(transform);

function addition(a) {
    return a + 2;
}
// console.log(addition(10, 20));


let minus1 = arr.map((element, index, orignalArr) => {

    console.log(element * 2, index, orignalArr)
    return element;
});
console.log(minus1)


let obj = [{ ttsid: 1, name: 'Home address' }, { ttsid: 2, name: 'Office address' }, { ttsid: 3, name: 'shop address' }]
let update = obj.map(tsf);
console.log(update)

function tsf(a) {
    return { value: a.ttsid, label: a.name }
}
//this is one line method
let update2 = obj.map((e) => { return { value: e.ttsid, label: e.name } });
console.log(update2);


function hello(arr) {

    let output = arr.map((e) => { return 'Hello! ' + e })
    return output;
}

console.log(hello(['tsf', 'qasim', 'tarique']));
// expect output['hello tsf', 'hello qasim', 'hello tarique']
console.log(hello(['tsfAkhtar']))