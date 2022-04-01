// export function chek100(x, y) {

//     if (x + y > 100) {
//         return 'This sum is greater than 100';
//     }
//     return 'This is samller than'
// }
// console.log(chek100(2, 30))

function checkVote(a) {

    if (a < 18) {
        return 'Your are not able to vote';

    }
    if (a >= 55) {
        return 'Your are able to vote in senior citizen catagory';
    }
    if (a >= 18 || a <= 55)
        return 'Your are able to vote';
};

console.log(checkVote(90));
console.log(checkVote(17));
