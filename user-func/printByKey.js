export function pritnKey(data, key) {
    let arr = new Set();
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        arr.add(element[key])
    }
    return arr;
}