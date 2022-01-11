import { RemoveDup } from "./removeduplicates.js";
import { arrSum } from "./sumOfArray.js";

export function findLonely(arr) {

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index]
        let n = (element * -1);
        if (arr.indexOf(n) === -1)
            return element;

    }

}


