import { areaofCircle } from "./areaofCircle.js"
import { areaofsquar } from "./areofsquar.js";

export function circleVSsquare(d, s) {
    let AOC = areaofCircle(d * 1 / 4);
    let AOS = areaofsquar(s);
    console.log("AOC = ", areaofCircle(d * 1 / 2), 'AOS = ', areaofsquar(s))

    if (AOC > AOS) {

        return console.log("AOC")



    }
    else return console.log("AOS")

};

