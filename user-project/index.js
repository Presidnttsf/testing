import userData from "./user-data.js";
import { pd } from "./helper-functions.js";
import user from "../user.js";
import { getDiscountAmount, getIGST } from "./math-helper.js";
import { printDiscountBill } from "./math-helper.js";

// pd(userData[0])
// pd(userData[49])
// pd(userData[9])

// pd (userData[])

// console.log('getIGST =', getIGST(100));
printDiscountBill(1000, 5);
// console.log ('discounted amount=', getDiscountAmount(42595,19));