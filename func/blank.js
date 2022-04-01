function printTri(n) {

    for (let i = 0; i <= n.length; i++) {
        let tri = '';
        let final = '';
        for (let j = 0; j < i; j++) {
            tri += '*';
        }
        for (let k = i; k <= n.length; k++) {
            final += k + ' ';

        }
        console.log(tri + final)
    }


};


printTri([1, 2, 3, 4, 5])