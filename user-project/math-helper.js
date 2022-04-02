export const multiply = function (a) {
    return (a * b);
};

export const percentage = function (a, b) {
    return (a * b) / 100;
};

export const getCGST = function (a) {
    return percentage(a, 9);
};

export const getSGST = function (a) {
    return percentage(a, 9);
};

export const getIGST = function (a) {
    return getSGST(a) + getCGST(a);
};

export const printBill = function (a, b) {
    console.log('SGST =', getSGST(a));
    console.log('CGST =', getCGST(a));
    console.log('IGST =', getIGST(a));
    console.log('GRAND TOTAL =', getIGST(a) + a);
};

export const getDiscountAmount = function (a, b) {
    return a - percentage(a, b);

};

export const printDiscountBill = function (a, b) {
    console.log('Amount', a);
    console.log('Discount:', b, '%');
    let amount = getDiscountAmount(a, b);
    console.log("Discount Amount:", amount);

printBill(amount);
};



