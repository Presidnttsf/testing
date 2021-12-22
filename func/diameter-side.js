import { areaofCircle } from "./areaofCircle.js"
import { areaofsquar } from "./areofsquar.js";

export function circleVSsquare(d, s) {
    let AOC = areaofCircle(d * 1 / 2);
    let AOS = areaofsquar(s);
    console.log("AOC = ", AOC, 'AOS = ', AOS)

    if (AOC > AOS) {

        return console.log("Area of circle is greater", areaofCircle(d * 1 / 2))

    }
    else return console.log("Area of square is greater", areaofsquar(s))

};

