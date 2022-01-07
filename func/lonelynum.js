export function findLonely(arr) {
    let single = 0;
    for (let i = 0; i < arr.length; i++)
        single = single ^ arr[i];
    return single;
}


/*single = single ^ arr[i]; plz explain this line*/
